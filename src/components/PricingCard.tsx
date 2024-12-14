import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PricingCardProps } from '../types/pricing';
import { PricingFeature } from './PricingFeature';
import { PricingButton } from './PricingButton';
import { PricingCardHeader } from './PricingCardHeader';

export function PricingCard({ 
  title, 
  description, 
  features, 
  popular, 
  currentPlan,
}: PricingCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEnterprise = title === "Enterprise";

  return (
    <div 
      className={`relative bg-white rounded-xl transition-all duration-300 ${
        popular ? 'ring-2 ring-primary-500' : 'border border-gray-200'
      }`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <PricingCardHeader
            title={title}
            description={description}
            currentPlan={currentPlan}
          />
          
          <div className="flex items-center gap-6">
            {isEnterprise ? (
              <PricingButton title="Contact Us" isEnterprise={true} />
            ) : null}
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={isExpanded ? "Collapse details" : "Expand details"}
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-200">
          <div className="pt-6 grid grid-cols-2 gap-x-8 gap-y-2">
            {features.map((feature, index) => (
              <PricingFeature key={index} feature={feature} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}