import { Rocket } from "lucide-react";

export default function ProCard() {
  return (
    <div className="relative min-h-[140px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#7115f4] via-[#5b0ce9] to-[#3d08bd] p-5 text-white shadow-card">
      <div className="relative z-10 max-w-[68%]">
        <p className="text-lg font-extrabold leading-tight">Need More Stats?</p>
        <p className="mt-1 text-xs font-medium text-white/65">
          Upgrade to pro for added benefits
        </p>
        <button className="mt-4 flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white shadow-soft transition-colors hover:bg-accent/90">
          <Rocket size={14} strokeWidth={2.5} />
          Go Pro Now
        </button>
      </div>

      <svg
        aria-hidden="true"
        className="absolute -right-1 -top-2 h-[155px] w-[138px]"
        viewBox="0 0 138 155"
      >
        <path
          d="M78 156c-3-18 13-26 10-44-3-18-24-26-18-46 4-14 17-20 27-25"
          fill="none"
          stroke="#201050"
          strokeLinecap="round"
          strokeWidth="8"
        />
        <path
          d="M104 156c-5-16 8-25 6-39-2-14-16-23-10-38 4-10 13-15 21-19"
          fill="none"
          stroke="#27115e"
          strokeLinecap="round"
          strokeWidth="7"
        />
        <path d="m91 36 8-15 8 15h-5v13h-7V36z" fill="white" />
        <path d="m111 74 8-15 8 15h-5v13h-7V74z" fill="white" />
        <path
          d="m78 26 12-10 12 10v13H78V26Z"
          fill="white"
          opacity=".92"
        />
        <path d="M85 39v-8h10v8" fill="#7115f4" />
        <path
          d="M68 148c-2-8 4-13 10-13s12 5 10 13H68Z"
          fill="white"
          opacity=".9"
        />
      </svg>
    </div>
  );
}
