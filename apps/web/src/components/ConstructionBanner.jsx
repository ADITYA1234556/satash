/**
 * Construction Banner Component
 * Displays a notice that the website is under construction
 */

import React from 'react';
import { AlertCircle } from 'lucide-react';

const ConstructionBanner = () => {
  return (
    <div className="bg-yellow-100 border-b-2 border-yellow-400 px-4 py-3">
      <div className="container mx-auto flex items-center gap-3 justify-center">
        <AlertCircle className="h-5 w-5 text-yellow-800 flex-shrink-0" aria-hidden="true" />
        <p className="text-sm font-semibold text-yellow-800">
          Website is under construction. Some features may be unavailable.
        </p>
      </div>
    </div>
  );
};

export default ConstructionBanner;
