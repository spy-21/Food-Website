import React from "react";

const Card = () => {
  return (
    <div className="w-[190px] h-[254px] bg-white rounded-2xl relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-md border border-white/20 hover:-translate-y-2 hover:shadow-xl hover:border-violet-600/20 active:scale-95 active:translate-y-1">
      {/* Shine */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0)_40%,rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)_60%)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 animate-[shine_3s_infinite]" />

      {/* Glow */}
      <div className="absolute -inset-2.5 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.3)_0%,rgba(124,58,237,0)_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3 p-5 h-full">
        {/* Badge */}
        <div className="absolute top-3 right-3 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold scale-90 opacity-0 transition-all duration-400 delay-100 group-hover:scale-100 group-hover:opacity-100 z-10">
          NEW
        </div>

        {/* Image */}
        <div
          className="w-full h-[100px] rounded-xl bg-gradient-to-br from-purple-300 to-purple-500 relative overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:scale-[1.03] shadow-md"
          style={{
            backgroundColor: "#a78bfa",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_30%),repeating-linear-gradient(45deg,rgba(139,92,246,0.1)_0px,rgba(139,92,246,0.1)_2px,transparent_2px,transparent_4px)] opacity-50"></div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1">
          <p className="text-slate-800 text-[1.1em] font-bold transition-all group-hover:text-purple-600 group-hover:translate-x-0.5">
            Premium Design
          </p>
          <p className="text-slate-800 text-xs opacity-70 transition-all group-hover:opacity-100 group-hover:translate-x-0.5">
            Hover to reveal stunning effects
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-auto">
          <div className="text-slate-800 font-bold text-base transition-all group-hover:text-purple-600 group-hover:translate-x-0.5">
            $49.99
          </div>
          <div className="w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center text-white cursor-pointer transition-all transform scale-90 group-hover:scale-100 group-hover:shadow-[0_0_0_4px_rgba(124,58,237,0.2)]">
            <svg
              className="animate-[pulse_1.5s_infinite]"
              height="16"
              width="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 12H20M12 4V20" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
