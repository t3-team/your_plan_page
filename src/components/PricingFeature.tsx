import React from 'react';
import { Check, X } from 'lucide-react';
import { PricingFeature as PricingFeatureType } from '../types/pricing';

interface PricingFeatureProps {
  feature: PricingFeatureType;
}

export function PricingFeature({ feature }: PricingFeatureProps) {
  return (
    <div className="flex items-start gap-3 py-2">
      {feature.available ? (
        <Check className="h-5 w-5 flex-shrink-0 text-primary-500" />
      ) : (
        <X className="h-5 w-5 flex-shrink-0 text-gray-300" />
      )}
      <div>
        <p className="text-sm text-gray-700">{feature.name}</p>
        {feature.value && (
          <p className="text-sm font-medium text-gray-900">{feature.value}</p>
        )}
      </div>
    </div>
  );
}