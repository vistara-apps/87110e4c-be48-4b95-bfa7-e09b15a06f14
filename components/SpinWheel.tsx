'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface SpinWheelProps {
  isSpinning: boolean;
  onSpinComplete: () => void;
}

export function SpinWheel({ isSpinning, onSpinComplete }: SpinWheelProps) {
  const [rotation, setRotation] = useState(0);

  const handleSpin = () => {
    if (isSpinning) return;
    
    // Random rotation between 1800-2160 degrees (5-6 full rotations)
    const newRotation = rotation + 1800 + Math.random() * 360;
    setRotation(newRotation);
    
    // Call onSpinComplete after animation
    setTimeout(() => {
      onSpinComplete();
    }, 3000);
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Wheel */}
      <div 
        className="spin-wheel"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning ? 'transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none',
        }}
      >
        {/* Center circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-slate-900 rounded-full border-4 border-yellow-500 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>
      
      {/* Pointer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
        <div className="w-0 h-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-yellow-500" />
      </div>
    </div>
  );
}
