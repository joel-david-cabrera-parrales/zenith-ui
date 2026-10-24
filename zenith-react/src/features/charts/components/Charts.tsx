import {
  Bar as RechartsBar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Cell,
  Line as RechartsLine,
  LineChart as RechartsLineChart,
  Pie as RechartsPie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useTheme } from '@/shared/hooks/useTheme';

export interface ChartDatum {
  name: string;
  value: number;
  secondary?: number;
  color?: string;
}

export type ChartSize = 'sm' | 'md' | 'lg';

export interface ChartProps {
  data: ChartDatum[];
  size?: ChartSize;
  color?: string;
  secondaryColor?: string;
  valueLabel?: string;
  secondaryLabel?: string;
  showGrid?: boolean;
  loading?: boolean;
}

const CHART_HEIGHT: Record<ChartSize, number> = { sm: 176, md: 240, lg: 320 };
const CHART_PALETTE = ['#2563eb', '#06b6d4', '#8b5cf6', '#10b981', '#f59e0b', '#f43f5e'];

const ChartState = ({ loading, height }: { loading: boolean; height: number }) => (
  <div
    className="flex w-full items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-950/60"
    style={{ height }}
    role="status"
    aria-live="polite"
  >
    {loading ? (
      <div className="w-full space-y-3 px-8" aria-label="Cargando gráfico">
        <div className="h-3 w-1/3 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-24 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
      </div>
    ) : (
      <p className="text-sm text-slate-500 dark:text-slate-400">No hay datos disponibles</p>
    )}
  </div>
);

const ChartFrame = ({
  data,
  size = 'md',
  loading = false,
  children,
}: ChartProps & { children: React.ReactNode }) => {
  const height = CHART_HEIGHT[size];

  if (loading || data.length === 0) {
    return <ChartState loading={loading} height={height} />;
  }

  return (
    <div className="w-full min-w-0" style={{ height }}>
      {children}
    </div>
  );
};

const useChartColors = () => {
  const { dark } = useTheme();
  return {
    tick: dark ? '#94a3b8' : '#64748b',
    grid: dark ? '#334155' : '#e2e8f0',
    tooltip: dark ? '#0f172a' : '#ffffff',
    tooltipBorder: dark ? '#334155' : '#e2e8f0',
    tooltipText: dark ? '#e2e8f0' : '#0f172a',
  };
};

const ChartTooltip = ({
  dark,
  border,
  text,
}: {
  dark: boolean;
  border: string;
  text: string;
}) => (
  <Tooltip
    contentStyle={{
      backgroundColor: dark ? '#0f172a' : '#ffffff',
      border: `1px solid ${border}`,
      borderRadius: 12,
      color: text,
      boxShadow: '0 8px 24px rgba(15, 23, 42, 0.12)',
      fontSize: 12,
    }}
    labelStyle={{ color: text, fontWeight: 600, marginBottom: 4 }}
    itemStyle={{ color: text }}
    cursor={{ fill: dark ? 'rgba(51, 65, 85, 0.35)' : 'rgba(226, 232, 240, 0.45)' }}
  />
);

export const BarChart = ({
  data,
  size = 'md',
  color = '#2563eb',
  secondaryColor = '#06b6d4',
  valueLabel = 'Valor',
  secondaryLabel = 'Comparación',
  showGrid = true,
  loading = false,
}: ChartProps) => {
  const { dark } = useTheme();
  const colors = useChartColors();

  return (
    <ChartFrame data={data} size={size} loading={loading}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }} accessibilityLayer>
          {showGrid && <CartesianGrid stroke={colors.grid} strokeDasharray="3 3" vertical={false} />}
          <XAxis dataKey="name" tick={{ fill: colors.tick, fontSize: 11 }} axisLine={{ stroke: colors.grid }} tickLine={false} />
          <YAxis tick={{ fill: colors.tick, fontSize: 11 }} axisLine={false} tickLine={false} />
          <ChartTooltip dark={dark} border={colors.tooltipBorder} text={colors.tooltipText} />
          <RechartsBar dataKey="value" name={valueLabel} fill={color} radius={[5, 5, 0, 0]} maxBarSize={36} />
          {data.some((item) => item.secondary !== undefined) && (
            <RechartsBar dataKey="secondary" name={secondaryLabel} fill={secondaryColor} radius={[5, 5, 0, 0]} maxBarSize={36} />
          )}
        </RechartsBarChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
};

export const LineChart = ({
  data,
  size = 'md',
  color = '#2563eb',
  secondaryColor = '#06b6d4',
  valueLabel = 'Valor',
  secondaryLabel = 'Comparación',
  showGrid = true,
  loading = false,
}: ChartProps) => {
  const { dark } = useTheme();
  const colors = useChartColors();

  return (
    <ChartFrame data={data} size={size} loading={loading}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }} accessibilityLayer>
          {showGrid && <CartesianGrid stroke={colors.grid} strokeDasharray="3 3" vertical={false} />}
          <XAxis dataKey="name" tick={{ fill: colors.tick, fontSize: 11 }} axisLine={{ stroke: colors.grid }} tickLine={false} />
          <YAxis tick={{ fill: colors.tick, fontSize: 11 }} axisLine={false} tickLine={false} />
          <ChartTooltip dark={dark} border={colors.tooltipBorder} text={colors.tooltipText} />
          <RechartsLine type="monotone" dataKey="value" name={valueLabel} stroke={color} strokeWidth={2.5} dot={{ r: 3, fill: color, strokeWidth: 0 }} activeDot={{ r: 5 }} />
          {data.some((item) => item.secondary !== undefined) && (
            <RechartsLine type="monotone" dataKey="secondary" name={secondaryLabel} stroke={secondaryColor} strokeWidth={2.5} dot={{ r: 3, fill: secondaryColor, strokeWidth: 0 }} activeDot={{ r: 5 }} />
          )}
        </RechartsLineChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
};

export const DonutChart = ({
  data,
  size = 'md',
  loading = false,
}: Pick<ChartProps, 'data' | 'size' | 'loading'>) => {
  const { dark } = useTheme();
  const colors = useChartColors();

  return (
    <ChartFrame data={data} size={size} loading={loading}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart accessibilityLayer>
          <RechartsPie data={data} dataKey="value" nameKey="name" innerRadius="54%" outerRadius="78%" paddingAngle={3} stroke="none">
            {data.map((entry, index) => (
              <Cell key={`${entry.name}-${index}`} fill={entry.color ?? CHART_PALETTE[index % CHART_PALETTE.length]} />
            ))}
          </RechartsPie>
          <ChartTooltip dark={dark} border={colors.tooltipBorder} text={colors.tooltipText} />
        </RechartsPieChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
};

export const CHART_PALETTE_DEFAULT = CHART_PALETTE;
