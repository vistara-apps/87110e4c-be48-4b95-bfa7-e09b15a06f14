'use client';

import { SpinResult } from '@/lib/types';
import { Award, Lightbulb, Share2 } from 'lucide-react';

interface ResultCardProps {
  result: SpinResult;
}

export function ResultCard({ result }: ResultCardProps) {
  const { tip, reward } = result;

  const rarityColors = {
    common: 'text-slate-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
  };

  return (
    <div className="result-card space-y-6">
      {/* Tip Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
          <h3 className="text-lg font-semibold text-slate-100">Today's Wisdom</h3>
          <span className={`text-xs font-medium ${rarityColors[tip.rarity]} uppercase`}>
            {tip.rarity}
          </span>
        </div>
        <p className="text-slate-300 leading-relaxed">{tip.content}</p>
        <div className="flex flex-wrap gap-2">
          {tip.interestTags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Reward Section */}
      <div className="space-y-3 pt-4 border-t border-slate-700">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-yellow-500" />
          <h3 className="text-lg font-semibold text-slate-100">Your Reward</h3>
        </div>
        <div className="flex items-center justify-between bg-slate-700 bg-opacity-50 p-4 rounded-lg">
          <div>
            <p className="font-semibold text-slate-100">{reward.name}</p>
            <p className="text-sm text-slate-400">{reward.description}</p>
          </div>
          <div className="text-2xl font-bold text-yellow-500">
            +{reward.value}
          </div>
        </div>
      </div>

      {/* Share Button */}
      <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-slate-100 rounded-lg transition-all duration-200">
        <Share2 className="w-4 h-4" />
        Share to Farcaster
      </button>
    </div>
  );
}
