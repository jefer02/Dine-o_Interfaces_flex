import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function ConversionGauge() {
  const percentage = 58.19;
  // semicircle from 180deg to 0deg
  const radius = 80;
  const circumference = Math.PI * radius; // half circle length
  const progress = (percentage / 100) * circumference;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-card h-full flex flex-col">
      <p className="text-sm font-semibold text-ink mb-2">Conversion</p>

      <div className="relative mx-auto mt-2 h-[110px] w-[220px]">
        <svg viewBox="0 0 220 110" className="h-full w-full overflow-visible">
          <path
            d="M 20 110 A 90 90 0 0 1 200 110"
            fill="none"
            stroke="#EDEBFD"
            strokeWidth="20"
            strokeLinecap="round"
          />
          <path
            d="M 20 110 A 90 90 0 0 1 200 110"
            fill="none"
            stroke="#6C5CE7"
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray={`${(percentage / 100) * 283} 283`}
          />
          {/* needle */}
          <line
            x1="110"
            y1="110"
            x2="165"
            y2="55"
            stroke="#1E1E2F"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="110" cy="110" r="5" fill="#1E1E2F" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 text-center">
          <p className="text-2xl font-extrabold text-ink">58,19%</p>
          <p className="flex items-center justify-center gap-1 text-xs font-semibold text-accent">
            <ArrowUpRight size={13} /> 3.5%
          </p>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-black/5 pt-4">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-light text-accent">
            <ArrowDownRight size={13} className="rotate-90" />
          </span>
          <div>
            <p className="text-[11px] text-ink-muted">Income</p>
            <p className="text-sm font-bold text-ink">$542,317</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-panel text-ink">
            <ArrowUpRight size={13} />
          </span>
          <div>
            <p className="text-[11px] text-ink-muted">Expences</p>
            <p className="text-sm font-bold text-ink">$497,456</p>
          </div>
        </div>
      </div>
    </div>
  );
}
