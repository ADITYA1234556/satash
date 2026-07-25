import React from 'react';
const UNSPLASH_LOGO = 'https://images.unsplash.com/photo-1785005604166-00ada6c82951?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D';

const Logo = ({ className = '', showText = true, compact = false }) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`.trim()}>
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-soft ring-1 ring-satash-blue-100 overflow-hidden">
        <img
          src={UNSPLASH_LOGO}
          alt="Satash Community Care logo"
          className="h-full w-full object-contain"
        />
      </div>
      {showText && !compact && (
        <div className="flex flex-col leading-tight">
          <span className="text-[1.05rem] font-bold tracking-[0.2em] text-satash-blue-900 uppercase">
            Satash
          </span>
          <span className="text-sm font-semibold text-satash-blue-700">
            Community Care
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
