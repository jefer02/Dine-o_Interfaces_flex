import { Users, ArrowUpRight, ArrowDownRight } from "lucide-react";
import SessionsChart from "./SessionsChart";

export default function SessionsCard() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-card">
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm font-semibold text-ink">Online Store Sessions</p>
        <button className="rounded-full border border-black/5 px-4 py-1.5 text-xs font-semibold text-ink hover:bg-panel transition-colors">
          View Report
        </button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-light text-primary">
          <Users size={19} />
        </div>
        <div>
          <p className="text-xs text-ink-muted">Visitors</p>
          <p className="text-xl font-extrabold text-ink">68</p>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <span className="flex items-center gap-1 text-sm font-semibold text-accent">
            <ArrowUpRight size={14} /> 15.6%
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-primary">
            26
            <ArrowDownRight size={14} className="text-danger" /> 1.6%
          </span>
        </div>
      </div>

      <SessionsChart />
    </div>
  );
}
