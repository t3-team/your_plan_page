import React from 'react';
import { Check, X } from 'lucide-react';
import { PricingFeature } from '../types/pricing';

interface PricingFeatureListProps {
  features: PricingFeature[];
}

export function PricingFeatureList({ features }: PricingFeatureListProps) {
  return (
    <ul className="mt-8 space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          {feature.available ? (
            <Check className="h-5 w-5 flex-shrink-0 text-[#E84E36]" />
          ) : (
            <X className="h-5 w-5 flex-shrink-0 text-gray-300" />
          )}
          <div>
            <p className="text-sm text-gray-700">{feature.name}</p>
            {feature.value && (
              <p className="text-sm font-medium text-gray-900">{feature.value}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}