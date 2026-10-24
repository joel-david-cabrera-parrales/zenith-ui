import { useEffect, useId, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { MonthCalendar } from './MonthCalendar';
import {
  DEFAULT_DATE_FORMAT,
  formatDateValue,
  getDatePickerLabels,
  parseDate,
  startOfMonth,
  toDateValue,
} from './datePicker.utils';

export interface DatePickerProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
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

export const DatePicker = ({
  value,
  defaultValue = '',
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
}: DatePickerProps) => {
  const generatedId = useId();
  const inputId = `date-picker-${generatedId}`;
  const descriptionId = `${inputId}-description`;
  const errorId = `${inputId}-error`;
  const rootRef = useRef<HTMLDivElement>(null);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const selectedValue = value ?? internalValue;
  const labels = getDatePickerLabels(locale);
  const [visibleMonth, setVisibleMonth] = useState(() =>
    startOfMonth(parseDate(selectedValue) ?? new Date()),
  );

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  const handleSelect = (nextValue: string) => {
    if (value === undefined) setInternalValue(nextValue);
    onChange?.(nextValue);
    const date = parseDate(nextValue);
    if (date) setVisibleMonth(startOfMonth(date));
    setOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') setOpen(false);
  };

  return (
    <div ref={rootRef} onKeyDown={handleKeyDown} className={cx('relative w-full max-w-sm', open && 'z-50', className)}>
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
            const selectedDate = parseDate(selectedValue);
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
        <span className={selectedValue ? '' : 'text-slate-400 dark:text-slate-500'}>
          {formatDateValue(selectedValue, locale, format) || placeholder || labels.selectDate}
        </span>
        <span aria-hidden="true" className="material-symbols-outlined text-[19px] text-slate-400">calendar_month</span>
      </button>
      {name && <input type="hidden" name={name} value={selectedValue} />}
      {error && <p id={errorId} role="alert" className="mt-1.5 text-xs text-rose-600 dark:text-rose-400">{error}</p>}
      {open && !disabled && (
        <div
          role="dialog"
          aria-label={label ?? labels.selectDate}
          className="absolute left-0 top-full z-50 mt-2 rounded-xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/30"
        >
          <MonthCalendar
            month={visibleMonth}
            locale={locale}
            selectedDate={selectedValue}
            minDate={minDate}
            maxDate={maxDate}
            disabledDates={disabledDates}
            onSelect={handleSelect}
            onMonthChange={setVisibleMonth}
            showNavigation
            previousMonthLabel={labels.previousMonth}
            nextMonthLabel={labels.nextMonth}
            onClose={() => setOpen(false)}
          />
          <div className="mt-3 flex justify-end border-t border-slate-100 pt-3 dark:border-slate-800">
            <button
              type="button"
              onClick={() => handleSelect(toDateValue(new Date()))}
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
