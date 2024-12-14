import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandButtonProps {
  isExpanded: boolean;
  onClick: () => void;
}

export function ExpandButton({ isExpanded, onClick }: ExpandButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      aria-label={isExpanded ? "Collapse details" : "Expand details"}
    >
      {isExpanded ? (
        <ChevronUp className="w-5 h-5 text-gray-500" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-500" />
      )}
    </button>
  );
}