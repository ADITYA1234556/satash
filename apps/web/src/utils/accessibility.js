/**
 * Accessibility utilities
 * Ensures WCAG 2.1 compliance for healthcare accessibility
 */

export const a11y = {
  // Semantic HTML helpers
  heading: (level = 'h1', text) => ({ element: `h${level}`, content: text }),
  
  // ARIA labels for complex components
  ariaLabels: {
    closeButton: 'Close dialog',
    navigationMenu: 'Main navigation',
    searchForm: 'Site search',
    servicesList: 'Available services',
  },
  
  // Focus management
  focusableElements: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  
  // High contrast mode detection
  prefersHighContrast: () => window.matchMedia('(prefers-contrast: more)').matches,
  
  // Motion preferences
  prefersReducedMotion: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
};

export const a11yClassNames = {
  srOnly: 'sr-only', // Tailwind utility for screen reader only content
  focusVisible: 'focus-visible',
};
