import { ArrowUpRight, ArrowDownRight, LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  value: string;
  change: string;
  direction: "up" | "down";
};

export default function StatCard({
  icon: Icon,
  label,
  value,
  change,
  direction,
}: Props) {
  const isUp = direction === "up";
  return (
    <div className="flex-1 rounded-2xl bg-white p-5 shadow-card flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
        <Icon size={20} strokeWidth={2.2} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-ink-muted">{label}</p>
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="text-xl font-extrabold text-ink">{value}</span>
          <span
            className={`flex items-center gap-0.5 text-xs font-semibold ${
              isUp ? "text-accent" : "text-danger"
            }`}
          >
            {isUp ? (
              <ArrowUpRight size={13} />
            ) : (
              <ArrowDownRight size={13} />
            )}
            {change}
          </span>
        </div>
      </div>
    </div>
  );
}
