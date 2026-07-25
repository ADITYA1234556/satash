/**
 * Main Layout Component
 * Wraps pages with header, footer, and consistent styling
 */

import React from 'react';

export const MainLayout = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-col min-h-screen ${className}`.trim()}>
      {children}
    </div>
  );
};

export const PageContainer = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto px-4 ${className}`.trim()}>
      {children}
    </div>
  );
};

export const ContentSection = ({ 
  children, 
  background = 'white', 
  padding = 'py-20',
  className = '' 
}) => {
  const bgClasses = {
    white: 'bg-white',
    'soft-white': 'bg-satash-white-soft',
    'blue-50': 'bg-satash-blue-50',
    'blue-900': 'bg-satash-blue-900 text-white',
  };

  return (
    <section className={`${bgClasses[background]} ${padding} ${className}`.trim()}>
      <PageContainer>
        {children}
      </PageContainer>
    </section>
  );
};
