'use client';

import { useState, useEffect } from 'react';
import { User } from '@/lib/types';
import { ArrowLeft, Calendar, Award } from 'lucide-react';
import Link from 'next/link';

export default function HistoryPage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('spinAndGrowUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen p-4 flex items-center justify-center">
        <p className="text-slate-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-md mx-auto space-y-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <button className="p-2 hover:bg-slate-800 rounded-lg transition-all duration-200">
              <ArrowLeft className="w-5 h-5 text-slate-400" />
            </button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-100">Spin History</h1>
            <p className="text-sm text-slate-400">Your learning journey</p>
          </div>
        </div>

        {/* History List */}
        <div className="space-y-4">
          {user.spinHistory.length === 0 ? (
            <div className="glass-card p-8 text-center">
              <p className="text-slate-400">No spins yet. Start your journey!</p>
            </div>
          ) : (
            user.spinHistory.map((result, index) => (
              <div key={index} className="glass-card p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {new Date(result.timestamp).toLocaleDateString()}
                  </div>
                  <span className="text-xs text-yellow-500 font-medium uppercase">
                    {result.tip.rarity}
                  </span>
                </div>
                
                <p className="text-slate-300 leading-relaxed">{result.tip.content}</p>
                
                <div className="flex items-center justify-between pt-3 border-t border-slate-700">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-slate-300">{result.reward.name}</span>
                  </div>
                  <span className="text-yellow-500 font-semibold">+{result.reward.value}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
