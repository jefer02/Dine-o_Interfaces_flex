"use client";

import { useState } from "react";
import { Calendar, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const days = [21, 22, 23, 24, 25];

export default function SessionsChart() {
  const [selectedDay, setSelectedDay] = useState(21);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm font-semibold text-ink">Sessions Over Time</p>
        <button className="flex items-center gap-2 rounded-full border border-black/5 bg-white px-3.5 py-1.5 text-xs font-medium text-ink">
          <Calendar size={13} className="text-ink-muted" />
          February
          <ChevronDown size={13} className="text-ink-muted" />
        </button>
      </div>

      <div className="relative h-40">
        {/* Grid labels */}
        <div className="absolute left-0 top-0 flex h-full flex-col justify-between text-[11px] text-ink-soft">
          <span>15</span>
          <span>10</span>
          <span>5</span>
          <span>0</span>
        </div>

        <div className="ml-6 h-full">
          <svg
            viewBox="0 0 400 140"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <defs>
              <linearGradient id="sessionFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6C5CE7" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#6C5CE7" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Horizontal gridlines */}
            {[0, 35, 70, 105, 140].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="400"
                y2={y}
                stroke="#ECEDF2"
                strokeWidth="1"
              />
            ))}

            <path
              d="M0,90 C30,40 55,40 80,75 C110,115 130,115 160,70 C190,25 205,55 230,60 C265,68 280,95 310,90 C340,85 360,20 400,10"
              fill="none"
              stroke="#6C5CE7"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M0,90 C30,40 55,40 80,75 C110,115 130,115 160,70 C190,25 205,55 230,60 C265,68 280,95 310,90 C340,85 360,20 400,10 L400,140 L0,140 Z"
              fill="url(#sessionFill)"
            />
          </svg>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button className="flex h-8 w-8 items-center justify-center rounded-full border border-black/5 text-ink-muted">
          <ChevronLeft size={15} />
        </button>
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
              selectedDay === day
                ? "bg-primary text-white shadow-soft"
                : "text-ink-muted hover:bg-panel"
            }`}
          >
            {day}
          </button>
        ))}
        <button className="flex h-8 w-8 items-center justify-center rounded-full border border-black/5 text-ink-muted">
          <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}
