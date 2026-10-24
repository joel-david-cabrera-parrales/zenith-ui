import { useEffect, useId, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { MonthCalendar } from './MonthCalendar';
import {
  addMonths,
  compareDateValues,
  DEFAULT_DATE_FORMAT,
  formatDateValue,
  getDatePickerLabels,
  parseDate,
  startOfMonth,
  toDateValue,
} from './datePicker.utils';
import type { DateRangeValue } from './datePicker.utils';

export interface DateRangePickerProps {
  value?: DateRangeValue;
  defaultValue?: DateRangeValue;
  onChange?: (value: DateRangeValue) => void;
  label?: string;
  description?: string;
  error?: string;
  placeholder?: string;
  name?: string;
  locale?: string;
  format?: Intl.DateTimeFormatOptions;
  minDate?: string;
  maxDate?: string;
  disabledDates?: string[];
  disabled?: boolean;
  className?: string;
}

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(' ');

export const DateRangePicker = ({
  value,
  defaultValue = {},
  onChange,
  label,
  description,
  error,
  placeholder,
  name,
  locale = 'es-ES',
  format = DEFAULT_DATE_FORMAT,
  minDate,
  maxDate,
  disabledDates,
  disabled = false,
  className,
}: DateRangePickerProps) => {
  const generatedId = useId();
  const inputId = `date-range-${generatedId}`;
  const descriptionId = `${inputId}-description`;
  const errorId = `${inputId}-error`;
  const rootRef = useRef<HTMLDivElement>(null);
  const [internalValue, setInternalValue] = useState<DateRangeValue>(defaultValue);
  const [open, setOpen] = useState(false);
  const [hoverDate, setHoverDate] = useState<string>();
  const selectedValue = value ?? internalValue;
  const labels = getDatePickerLabels(locale);
  const [visibleMonth, setVisibleMonth] = useState(() =>
    startOfMonth(parseDate(selectedValue.startDate) ?? new Date()),
  );
  const firstDate = formatDateValue(selectedValue.startDate, locale, format);
  const lastDate = formatDateValue(selectedValue.endDate, locale, format);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  const handleSelect = (selectedDate: string) => {
    let nextValue: DateRangeValue;
    if (!selectedValue.startDate || selectedValue.endDate) {
      nextValue = { startDate: selectedDate, endDate: undefined };
    } else if (compareDateValues(selectedDate, selectedValue.startDate) < 0) {
      nextValue = { startDate: selectedDate, endDate: selectedValue.startDate };
    } else {
      nextValue = { startDate: selectedValue.startDate, endDate: selectedDate };
    }
    if (value === undefined) setInternalValue(nextValue);
    onChange?.(nextValue);
    setHoverDate(undefined);
    if (nextValue.endDate) setOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') setOpen(false);
  };

  const clearRange = () => {
    const emptyValue: DateRangeValue = {};
    if (value === undefined) setInternalValue(emptyValue);
    onChange?.(emptyValue);
    setHoverDate(undefined);
  };

  const selectToday = () => {
    const today = toDateValue(new Date());
    const todayRange = { startDate: today, endDate: today };
    if (value === undefined) setInternalValue(todayRange);
    onChange?.(todayRange);
    setHoverDate(undefined);
    setOpen(false);
  };

  return (
    <div ref={rootRef} onKeyDown={handleKeyDown} className={cx('relative w-full', open && 'z-50', className)}>
      {label && (
        <label htmlFor={inputId} className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-200">
          {label}
        </label>
      )}
      {description && (
        <p id={descriptionId} className="mb-2 text-xs text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
      <button
        id={inputId}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-describedby={[description ? descriptionId : '', error ? errorId : ''].filter(Boolean).join(' ') || undefined}
        aria-invalid={Boolean(error)}
        disabled={disabled}
        onClick={() => {
          if (!open) {
            const selectedDate = parseDate(selectedValue.startDate);
            if (selectedDate) setVisibleMonth(startOfMonth(selectedDate));
          }
          setOpen((current) => !current);
        }}
        className={cx(
          'flex h-11 w-full items-center justify-between gap-3 rounded-lg border bg-white px-3.5 text-left text-sm shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-slate-900',
          error
            ? 'border-rose-400 text-rose-700 dark:border-rose-700 dark:text-rose-300'
            : 'border-slate-300 text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500',
          disabled && 'cursor-not-allowed bg-slate-50 text-slate-400 opacity-70 dark:bg-slate-800',
        )}
      >
        <span className={selectedValue.startDate ? '' : 'text-slate-400 dark:text-slate-500'}>
          {firstDate
            ? `${firstDate}${lastDate ? ` – ${lastDate}` : ' – …'}`
            : placeholder || labels.selectRange}
        </span>
        <span aria-hidden="true" className="material-symbols-outlined text-[19px] text-slate-400">date_range</span>
      </button>
      {name && (
        <>
          <input type="hidden" name={`${name}[start]`} value={selectedValue.startDate ?? ''} />
          <input type="hidden" name={`${name}[end]`} value={selectedValue.endDate ?? ''} />
        </>
      )}
      {error && <p id={errorId} role="alert" className="mt-1.5 text-xs text-rose-600 dark:text-rose-400">{error}</p>}
      {open && !disabled && (
        <div
          role="dialog"
          aria-label={label ?? labels.selectRange}
          className="absolute left-0 top-full z-50 mt-2 rounded-xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/30"
        >
          <div className="mb-3 flex items-center justify-between gap-4">
            <button
              type="button"
              aria-label={labels.previousMonth}
              onClick={() => setVisibleMonth((current) => addMonths(current, -1))}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              {selectedValue.endDate ? labels.newRange : selectedValue.startDate ? labels.endDate : labels.startDate}
            </span>
            <button
              type="button"
              aria-label={labels.nextMonth}
              onClick={() => setVisibleMonth((current) => addMonths(current, 1))}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[visibleMonth, addMonths(visibleMonth, 1)].map((month) => (
              <MonthCalendar
                key={`${month.getFullYear()}-${month.getMonth()}`}
                month={month}
                locale={locale}
                rangeStart={selectedValue.startDate}
                rangeEnd={selectedValue.endDate}
                hoverDate={hoverDate}
                isRange
                minDate={minDate}
                maxDate={maxDate}
                disabledDates={disabledDates}
                onSelect={handleSelect}
                onHoverDate={setHoverDate}
                previousMonthLabel={labels.previousMonth}
                nextMonthLabel={labels.nextMonth}
              />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-800">
            <button
              type="button"
              onClick={clearRange}
              className="rounded-md px-2.5 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-2 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {labels.clear}
            </button>
            <button
              type="button"
              onClick={selectToday}
              className="rounded-md px-2.5 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-blue-600 dark:text-blue-300 dark:hover:bg-blue-950/50"
            >
              {labels.today}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
