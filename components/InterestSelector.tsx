'use client';

import { useState } from 'react';
import { INTERESTS } from '@/lib/constants';
import { Check } from 'lucide-react';

interface InterestSelectorProps {
  selectedInterests: string[];
  onInterestsChange: (interests: string[]) => void;
  maxSelections?: number;
}

export function InterestSelector({ 
  selectedInterests, 
  onInterestsChange,
  maxSelections = 5 
}: InterestSelectorProps) {
  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      onInterestsChange(selectedInterests.filter(i => i !== interest));
    } else if (selectedInterests.length < maxSelections) {
      onInterestsChange([...selectedInterests, interest]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-100">
          Select Your Interests
        </h3>
        <span className="text-sm text-slate-400">
          {selectedInterests.length}/{maxSelections}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {INTERESTS.map((interest) => {
          const isSelected = selectedInterests.includes(interest);
          return (
            <button
              key={interest}
              onClick={() => toggleInterest(interest)}
              className={`interest-tag ${isSelected ? 'interest-tag-selected' : ''}`}
              disabled={!isSelected && selectedInterests.length >= maxSelections}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm">{interest}</span>
                {isSelected && <Check className="w-4 h-4" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
