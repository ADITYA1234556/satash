/**
 * Utility functions for managing CSS class names
 */

export const cn = (...classes) => {
  return classes
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
};

export const cardClasses = {
  base: 'rounded-[2rem] border border-slate-200 shadow-soft',
  elevated: 'rounded-[2rem] border border-slate-200 shadow-soft hover:shadow-lg transition-shadow',
  contained: 'rounded-[2rem] bg-white p-8 shadow-soft border border-slate-200',
  outlined: 'rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm',
};

export const buttonClasses = {
  primary: 'inline-flex items-center justify-center rounded-full bg-satash-green-400 px-8 py-4 text-base font-semibold text-satash-blue-900 shadow-soft hover:bg-satash-green-300 transition-colors',
  secondary: 'inline-flex items-center justify-center rounded-full border border-satash-blue-600 bg-satash-blue-50 px-8 py-4 text-base font-semibold text-satash-blue-900 hover:bg-satash-blue-100 transition-colors',
  outline: 'inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors',
};

export const textClasses = {
  heading1: 'text-5xl md:text-6xl font-bold tracking-tight leading-tight',
  heading2: 'text-4xl md:text-5xl font-bold',
  heading3: 'text-3xl font-bold',
  subheading: 'text-xl md:text-2xl',
  body: 'text-base leading-relaxed',
  caption: 'text-sm text-slate-600',
};
