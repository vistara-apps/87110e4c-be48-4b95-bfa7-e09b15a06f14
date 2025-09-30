'use client';

import { MICRO_REWARDS } from '@/lib/constants';
import { Award, Coins, Gem } from 'lucide-react';

interface RewardPickerProps {
  selectedReward: string;
  onRewardChange: (rewardId: string) => void;
}

export function RewardPicker({ selectedReward, onRewardChange }: RewardPickerProps) {
  const getRewardIcon = (type: string) => {
    switch (type) {
      case 'points':
        return <Award className="w-6 h-6" />;
      case 'currency':
        return <Coins className="w-6 h-6" />;
      case 'nft':
        return <Gem className="w-6 h-6" />;
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-100">
        Preferred Reward Type
      </h3>
      
      <div className="grid grid-cols-1 gap-3">
        {MICRO_REWARDS.map((reward) => {
          const isSelected = selectedReward === reward.id;
          return (
            <button
              key={reward.id}
              onClick={() => onRewardChange(reward.id)}
              className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all duration-200 ${
                isSelected 
                  ? 'border-yellow-500 bg-yellow-500 bg-opacity-10' 
                  : 'border-slate-600 bg-slate-800 hover:border-slate-500'
              }`}
            >
              <div className={isSelected ? 'text-yellow-500' : 'text-slate-400'}>
                {getRewardIcon(reward.type)}
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-slate-100">{reward.name}</p>
                <p className="text-sm text-slate-400">{reward.description}</p>
              </div>
              {isSelected && (
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-slate-900 rounded-full" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
