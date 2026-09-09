"use client";

import { ChevronLeft, Search, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center gap-4 px-2 pb-6">
      <button className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white text-ink-muted hover:text-ink transition-colors">
        <ChevronLeft size={18} />
      </button>

      <div className="flex flex-1 items-center gap-3 rounded-full border border-black/5 bg-white px-5 py-2.5 max-w-md">
        <Search size={17} className="text-ink-muted" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent text-sm text-ink placeholder:text-ink-soft outline-none"
        />
      </div>

      <div className="ml-auto flex items-center gap-4">
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white text-ink-muted">
          <Bell size={17} />
          <span className="absolute top-2 right-2.5 h-1.5 w-1.5 rounded-full bg-primary" />
        </button>

        <div className="hidden sm:block text-right leading-tight">
          <p className="text-[11px] text-ink-muted">Your Balance</p>
          <p className="text-sm font-bold text-primary">$5.456</p>
        </div>

        <div className="hidden md:block h-8 w-px bg-black/5" />

        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-300 to-primary overflow-hidden flex items-center justify-center text-white text-xs font-bold">
            L
          </div>
          <span className="text-sm font-semibold text-ink">Hi, Lay</span>
        </div>
      </div>
    </header>
  );
}
