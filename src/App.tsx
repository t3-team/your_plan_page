import React from 'react';
import { PricingCard } from './components/PricingCard';
import { PricingHeader } from './components/PricingHeader';
import { pricingPlans } from './data/pricingPlans';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <PricingHeader />
        <div className="mt-12 space-y-4">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}