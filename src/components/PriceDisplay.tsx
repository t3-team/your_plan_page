import React from 'react';

interface PriceDisplayProps {
  price: string;
  isEnterprise?: boolean;
}

export function PriceDisplay({ price, isEnterprise = false }: PriceDisplayProps) {
  if (isEnterprise) {
    return null;
  }

  return (
    <div className="text-right">
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold">₹</span>
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-gray-500 text-sm ml-1">+GST</span>
      </div>
    </div>
  );
}