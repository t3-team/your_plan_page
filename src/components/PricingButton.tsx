import React from 'react';
import { openEnterpriseEmail } from '../utils/email';

interface PricingButtonProps {
  title: string;
  variant?: 'primary' | 'secondary';
  isEnterprise?: boolean;
}

export function PricingButton({ 
  title, 
  variant = 'primary',
  isEnterprise = false
}: PricingButtonProps) {
  const baseStyles = "px-6 py-2 rounded-lg font-medium transition-colors";
  const variantStyles = variant === 'primary' 
    ? "bg-primary-500 text-white hover:bg-primary-600" 
    : "bg-gray-100 text-gray-900 hover:bg-gray-200";

  const handleClick = () => {
    if (isEnterprise) {
      openEnterpriseEmail();
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles}`}
    >
      {title}
    </button>
  );
}