export interface DateRangeValue {
  startDate?: string;
  endDate?: string;
}

export const DEFAULT_DATE_FORMAT: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
};

export interface DatePickerLabels {
  previousMonth: string;
  nextMonth: string;
  today: string;
  clear: string;
  newRange: string;
  startDate: string;
  endDate: string;
  selectDate: string;
  selectRange: string;
}

const DATE_PICKER_LABELS: Record<string, DatePickerLabels> = {
  es: {
    previousMonth: 'Mes anterior',
    nextMonth: 'Mes siguiente',
    today: 'Hoy',
    clear: 'Limpiar',
    newRange: 'Selecciona un nuevo rango',
    startDate: 'Selecciona la fecha inicial',
    endDate: 'Selecciona la fecha final',
    selectDate: 'Seleccionar fecha',
    selectRange: 'Seleccionar rango de fechas',
  },
  en: {
    previousMonth: 'Previous month',
    nextMonth: 'Next month',
    today: 'Today',
    clear: 'Clear',
    newRange: 'Select a new range',
    startDate: 'Select a start date',
    endDate: 'Select an end date',
    selectDate: 'Select date',
    selectRange: 'Select date range',
  },
  fr: {
    previousMonth: 'Mois précédent',
    nextMonth: 'Mois suivant',
    today: "Aujourd'hui",
    clear: 'Effacer',
    newRange: 'Sélectionnez une nouvelle période',
    startDate: 'Sélectionnez la date de début',
    endDate: 'Sélectionnez la date de fin',
    selectDate: 'Sélectionner une date',
    selectRange: 'Sélectionner une période',
  },
  de: {
    previousMonth: 'Vorheriger Monat',
    nextMonth: 'Nächster Monat',
    today: 'Heute',
    clear: 'Leeren',
    newRange: 'Neuen Zeitraum auswählen',
    startDate: 'Startdatum auswählen',
    endDate: 'Enddatum auswählen',
    selectDate: 'Datum auswählen',
    selectRange: 'Datumsbereich auswählen',
  },
};

export const getDatePickerLabels = (locale: string): DatePickerLabels =>
  DATE_PICKER_LABELS[locale.toLowerCase().split('-')[0]] ?? DATE_PICKER_LABELS.en;

export const getWeekStart = (locale: string): number =>
  /^(en-us|en-ca|ja|zh|ko)/i.test(locale) ? 0 : 1;

export const parseDate = (value?: string): Date | undefined => {
  if (!value) return undefined;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return undefined;
  const [, year, month, day] = match;
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return date.getFullYear() === Number(year) &&
    date.getMonth() === Number(month) - 1 &&
    date.getDate() === Number(day)
    ? date
    : undefined;
};

export const toDateValue = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const startOfMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth(), 1);

export const addMonths = (date: Date, amount: number): Date =>
  new Date(date.getFullYear(), date.getMonth() + amount, 1);

export const formatDateValue = (
  value: string | undefined,
  locale: string,
  format: Intl.DateTimeFormatOptions,
): string => {
  const date = parseDate(value);
  return date ? new Intl.DateTimeFormat(locale, format).format(date) : '';
};

export const compareDateValues = (first: string, second: string): number =>
  first.localeCompare(second);
