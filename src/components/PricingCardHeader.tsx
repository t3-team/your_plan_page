import React from 'react';
import { Crown } from 'lucide-react';

interface PricingCardHeaderProps {
  title: string;
  description: string;
  currentPlan?: boolean;
}

export function PricingCardHeader({ 
  title, 
  description, 
  currentPlan 
}: PricingCardHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-primary-500" />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          {currentPlan && (
            <span className="px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 rounded-full flex items-center gap-1">
              <Crown className="w-3 h-3" />
              Current
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
}