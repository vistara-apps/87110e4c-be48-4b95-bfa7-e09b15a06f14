'use client';

import { Loader2 } from 'lucide-react';

interface SpinButtonProps {
  canSpin: boolean;
  isSpinning: boolean;
  nextSpinTime: string;
  onClick: () => void;
}

export function SpinButton({ canSpin, isSpinning, nextSpinTime, onClick }: SpinButtonProps) {
  if (isSpinning) {
    return (
      <button className="btn-disabled flex items-center gap-2" disabled>
        <Loader2 className="w-5 h-5 animate-spin" />
        Spinning...
      </button>
    );
  }

  if (!canSpin) {
    return (
      <div className="text-center space-y-2">
        <button className="btn-disabled" disabled>
          Spin the Wheel
        </button>
        <p className="text-sm text-slate-400">
          Next spin in: <span className="text-yellow-500 font-semibold">{nextSpinTime}</span>
        </p>
      </div>
    );
  }

  return (
    <button className="btn-primary" onClick={onClick}>
      Spin the Wheel
    </button>
  );
}
