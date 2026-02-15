import React from 'react'

function Banner() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient (all theme shades -> #1E40AF) */}
      <div
        className="absolute inset-0 bg-linear-to-r from-[#021147] via-[#1E40AF]/80 vai-[#1E40AF]/10 to-[#1E40AF]/0"
        aria-hidden="true"
      />

      {/* Soft background glow only */}
      <div
        className="absolute -inset-1 bg-linear-to-r from-[#1E40AF]/30 to-[#1E40AF]/10 blur-3xl opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full py-3 px-4 text-center text-sm font-semibold text-white">
        <p className="flex items-center justify-center gap-2">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#1E40AF] shadow-sm ring-1 ring-[#1E40AF]/10">
            NEW
          </span>
          <span className="tracking-wide">
            AI-Powered Feature Added
          </span>
        </p>
      </div>
    </div>
  )
}

export default Banner
