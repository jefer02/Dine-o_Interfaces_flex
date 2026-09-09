"use client";

import {
  LayoutGrid,
  ShoppingBag,
  Package,
  BarChart2,
  Megaphone,
  MessageSquare,
  ChevronDown,
  LogOut,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: LayoutGrid, active: true },
  { label: "Orders", icon: ShoppingBag, hasChevron: true },
  { label: "Products", icon: Package, hasChevron: true },
  { label: "Analytics", icon: BarChart2 },
  { label: "Marketing", icon: Megaphone, hasChevron: true },
  { label: "Messages", icon: MessageSquare, badge: 25 },
];

const integrations = [
  { label: "Jira", color: "#2684FF", initial: "J" },
  { label: "Slack", color: "#611f69", initial: "S" },
  { label: "Intercom", color: "#1F8DED", initial: "I" },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-[248px] shrink-0 flex-col py-8 px-5">
      {/* Logo */}
      <div className="flex items-center gap-2 px-2 mb-10">
        <div className="relative flex h-9 w-9 items-center justify-center">
          <svg viewBox="0 0 100 100" className="h-9 w-9">
            <polygon
              points="50,3 93,26 93,74 50,97 7,74 7,26"
              fill="#FFC048"
            />
          </svg>
          <span className="absolute text-ink font-extrabold text-sm">R</span>
        </div>
        <span className="text-xl font-extrabold text-ink">flex</span>
      </div>

      {/* Menu */}
      <p className="px-3 text-xs font-medium text-ink-muted mb-3">Menu</p>
      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          if (item.active) {
            return (
              <button
                key={item.label}
                className="flex items-center gap-3 rounded-2xl bg-primary px-4 py-3 text-white shadow-soft"
              >
                <Icon size={18} strokeWidth={2.4} />
                <span className="text-sm font-semibold">{item.label}</span>
              </button>
            );
          }
          return (
            <button
              key={item.label}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-ink hover:bg-white transition-colors"
            >
              <span className="flex items-center gap-3">
                <Icon size={18} strokeWidth={2} className="text-ink/80" />
                <span className="text-sm font-medium">{item.label}</span>
              </span>
              {item.hasChevron && (
                <ChevronDown size={15} className="text-ink-muted" />
              )}
              {item.badge && (
                <span className="flex h-5 min-w-[22px] items-center justify-center rounded-full bg-accent px-1.5 text-[11px] font-semibold text-white">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Integrations */}
      <p className="px-3 text-xs font-medium text-ink-muted mt-8 mb-3">
        Integrations
      </p>
      <nav className="flex flex-col gap-1">
        {integrations.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-ink hover:bg-white transition-colors"
          >
            <span
              className="flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-bold text-white"
              style={{ backgroundColor: item.color }}
            >
              {item.initial}
            </span>
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto">
        <button className="flex items-center gap-3 rounded-2xl px-4 py-3 text-ink-muted hover:bg-white transition-colors w-full">
          <LogOut size={18} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
