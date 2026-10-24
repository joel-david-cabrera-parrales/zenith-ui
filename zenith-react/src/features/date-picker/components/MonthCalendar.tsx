import { useMemo } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import {
  addMonths,
  compareDateValues,
  getWeekStart,
  toDateValue,
} from './datePicker.utils';

export interface MonthCalendarProps {
  month: Date;
  locale: string;
  selectedDate?: string;
  rangeStart?: string;
  rangeEnd?: string;
  hoverDate?: string;
  isRange?: boolean;
  minDate?: string;
  maxDate?: string;
  disabledDates?: string[];
  onSelect: (value: string) => void;
  onHoverDate?: Dispatch<SetStateAction<string | undefined>>;
  onMonthChange?: (month: Date) => void;
  showNavigation?: boolean;
  previousMonthLabel?: string;
  nextMonthLabel?: string;
  id?: string;
  onClose?: () => void;
}

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(' ');

const getWeekdayLabels = (locale: string): string[] => {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'short' });
  const weekStart = getWeekStart(locale);
  return Array.from({ length: 7 }, (_, index) => {
    return formatter.format(new Date(2024, 0, 7 + weekStart + index));
  });
};

export const MonthCalendar = ({
  month,
  locale,
  selectedDate,
  rangeStart,
  rangeEnd,
  hoverDate,
  isRange = false,
  minDate,
  maxDate,
  disabledDates = [],
  onSelect,
  onHoverDate,
  onMonthChange,
  showNavigation = false,
  previousMonthLabel = 'Previous month',
  nextMonthLabel = 'Next month',
  id,
  onClose,
}: MonthCalendarProps) => {
  const weekdays = useMemo(() => getWeekdayLabels(locale), [locale]);
  const days = useMemo(() => {
    const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
    const weekOffset = (firstDay.getDay() - getWeekStart(locale) + 7) % 7;
    const gridStart = new Date(
      firstDay.getFullYear(),
      firstDay.getMonth(),
      firstDay.getDate() - weekOffset,
    );
    return Array.from(
      { length: 42 },
      (_, index) =>
        new Date(
          gridStart.getFullYear(),
          gridStart.getMonth(),
          gridStart.getDate() + index,
        ),
    );
  }, [locale, month]);
  const today = toDateValue(new Date());
  const previewEnd = rangeEnd ?? (rangeStart ? hoverDate : undefined);
  const orderedRange = rangeStart && previewEnd
    ? compareDateValues(rangeStart, previewEnd) <= 0
      ? [rangeStart, previewEnd]
      : [previewEnd, rangeStart]
    : undefined;

  const monthTitle = new Intl.DateTimeFormat(locale, {
    month: 'long',
    year: 'numeric',
  }).format(month);

  return (
    <div className="w-[280px]">
      <div className="mb-3 flex h-9 items-center justify-between">
        {showNavigation && onMonthChange ? (
          <button
            type="button"
            aria-label={previousMonthLabel}
            onClick={() => onMonthChange(addMonths(month, -1))}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
        ) : <span className="w-8" />}
        <h3 className="text-sm font-semibold capitalize text-slate-900 dark:text-white">
          {monthTitle}
        </h3>
        {showNavigation && onMonthChange ? (
          <button
            type="button"
            aria-label={nextMonthLabel}
            onClick={() => onMonthChange(addMonths(month, 1))}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-xl">chevron_right</span>
          </button>
        ) : <span className="w-8" />}
      </div>
      <div role="grid" aria-label={monthTitle} className="grid grid-cols-7 gap-y-1">
        {weekdays.map((weekday, index) => (
          <span
            key={`${weekday}-${index}`}
            role="columnheader"
            className="flex h-8 items-center justify-center text-[10px] font-semibold uppercase text-slate-400 dark:text-slate-500"
          >
            {weekday.replace('.', '').slice(0, 2)}
          </span>
        ))}
        {days.map((date) => {
          const dateValue = toDateValue(date);
          const isCurrentMonth = date.getMonth() === month.getMonth();
          const isSelected = isRange
            ? dateValue === rangeStart || dateValue === rangeEnd
            : dateValue === selectedDate;
          const isBetween = Boolean(
            orderedRange &&
              compareDateValues(dateValue, orderedRange[0]) > 0 &&
              compareDateValues(dateValue, orderedRange[1]) < 0,
          );
          const isDisabled = Boolean(
            (minDate && compareDateValues(dateValue, minDate) < 0) ||
              (maxDate && compareDateValues(dateValue, maxDate) > 0) ||
              disabledDates.includes(dateValue),
          );

          return (
            <div
              key={dateValue}
              role="gridcell"
              aria-selected={isSelected}
              className={cx(
                'flex h-9 items-center justify-center rounded-lg',
                isBetween && 'bg-blue-50 dark:bg-blue-950/60',
              )}
            >
              <button
                type="button"
                aria-label={new Intl.DateTimeFormat(locale, {
                  dateStyle: 'full',
                }).format(date)}
                aria-pressed={isSelected}
                disabled={isDisabled}
                onClick={() => {
                  onSelect(dateValue);
                  if (!isRange) onClose?.();
                }}
                onMouseEnter={() => onHoverDate?.(dateValue)}
                className={cx(
                  'relative flex h-8 w-8 items-center justify-center rounded-lg text-xs transition focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600',
                  isSelected
                    ? 'bg-blue-700 font-semibold text-white shadow-sm hover:bg-blue-800'
                    : isCurrentMonth
                      ? 'text-slate-700 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-300'
                      : 'text-slate-300 hover:bg-slate-50 dark:text-slate-600 dark:hover:bg-slate-800',
                  dateValue === today && !isSelected && 'ring-1 ring-inset ring-blue-500',
                  isDisabled && 'cursor-not-allowed text-slate-300 opacity-40 hover:bg-transparent dark:text-slate-700',
                )}
              >
                {date.getDate()}
              </button>
            </div>
          );
        })}
      </div>
      {id && <span className="sr-only" id={id}>Calendario de selección</span>}
    </div>
  );
};
