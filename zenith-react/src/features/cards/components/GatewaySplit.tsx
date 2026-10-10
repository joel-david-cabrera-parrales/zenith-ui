import type { HTMLAttributes } from 'react';

export interface GatewayCell {
  label: string;
  value: string;
  delta: string;
  alert?: boolean;
}

export interface GatewaySplitProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: string;
  region?: string;
  total?: string;
  totalUnit?: string;
  cells?: GatewayCell[];
  footer?: string;
  link?: string;
}

const DEFAULT_CELLS: GatewayCell[] = [
  { label: 'LATENCY', value: '24ms', delta: '-2ms' },
  { label: 'SUCCESS', value: '99.98%', delta: 'NOMINAL' },
  { label: 'DROPPED', value: '12', delta: '0.001%', alert: true },
];

export function GatewaySplit({
  title = 'Gateway Network',
  icon = 'hub',
  region = 'REGION: US-EAST',
  total = '1,248,930',
  totalUnit = 'total requests',
  cells = DEFAULT_CELLS,
  footer = 'EDGE_NODES: 32/32 ONLINE',
  link = 'TELEMETRY',
  className = '',
  ...rest
}: GatewaySplitProps) {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}
      {...rest}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-blue-600 text-[20px]"
            >
              {icon}
            </span>
            <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider">
              {title}
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-slate-50 text-slate-500 font-mono text-[9px] border border-slate-200">
            {region}
          </span>
        </div>
        <div className="text-2xl font-bold text-slate-900 mb-3">
          {total}
          <span className="text-[11px] text-slate-500 font-normal ml-1">
            {totalUnit}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 py-2">
          {cells.map((cell) => (
            <div
              key={cell.label}
              className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/60"
            >
              <span className="font-mono text-[9px] text-slate-500 block">
                {cell.label}
              </span>
              <span
                className={`text-sm font-semibold ${cell.alert === true ? 'text-rose-600' : 'text-slate-900'}`}
              >
                {cell.value}
              </span>
              <span
                className={`font-mono text-[9px] block mt-0.5 font-bold ${cell.alert === true ? 'text-rose-600' : 'text-emerald-600'}`}
              >
                {cell.delta}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
        <span>{footer}</span>
        <span className="text-blue-600 font-semibold flex items-center gap-0.5">
          {link}
          <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
            chevron_right
          </span>
        </span>
      </div>
    </div>
  );
}
