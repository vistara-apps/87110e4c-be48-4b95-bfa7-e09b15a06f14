'use client';

import { useState, useEffect } from 'react';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar, Identity } from '@coinbase/onchainkit/identity';
import { SpinWheel } from '@/components/SpinWheel';
import { SpinButton } from '@/components/SpinButton';
import { ResultCard } from '@/components/ResultCard';
import { InterestSelector } from '@/components/InterestSelector';
import { RewardPicker } from '@/components/RewardPicker';
import { EDUCATIONAL_TIPS, MICRO_REWARDS } from '@/lib/constants';
import { canUserSpin, formatTimeUntilNextSpin, getNextSpinTime, getRandomTipByInterests, getRandomReward } from '@/lib/utils';
import { SpinResult, User } from '@/lib/types';
import { Settings2, History, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [user, setUser] = useState<User>({
    selectedInterests: [],
    dailySpinTimestamp: 0,
    rewardPreference: '1',
    spinHistory: [],
  });

  const [isSpinning, setIsSpinning] = useState(false);
  const [currentResult, setCurrentResult] = useState<SpinResult | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [nextSpinTime, setNextSpinTime] = useState('');

  // Load user data from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('spinAndGrowUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Update next spin time
  useEffect(() => {
    const interval = setInterval(() => {
      if (user.dailySpinTimestamp > 0) {
        const next = getNextSpinTime(user.dailySpinTimestamp);
        setNextSpinTime(formatTimeUntilNextSpin(next));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [user.dailySpinTimestamp]);

  const handleSpin = () => {
    if (!canUserSpin(user.dailySpinTimestamp)) return;
    
    setIsSpinning(true);
    setCurrentResult(null);
  };

  const handleSpinComplete = () => {
    // Generate result
    const tip = getRandomTipByInterests(user.selectedInterests, EDUCATIONAL_TIPS);
    const reward = getRandomReward(MICRO_REWARDS);
    
    const result: SpinResult = {
      tip,
      reward,
      timestamp: Date.now(),
    };

    // Update user data
    const updatedUser = {
      ...user,
      dailySpinTimestamp: Date.now(),
      spinHistory: [result, ...user.spinHistory].slice(0, 10), // Keep last 10
    };

    setUser(updatedUser);
    localStorage.setItem('spinAndGrowUser', JSON.stringify(updatedUser));
    
    setCurrentResult(result);
    setIsSpinning(false);
  };

  const handleInterestsChange = (interests: string[]) => {
    const updatedUser = { ...user, selectedInterests: interests };
    setUser(updatedUser);
    localStorage.setItem('spinAndGrowUser', JSON.stringify(updatedUser));
  };

  const handleRewardChange = (rewardId: string) => {
    const updatedUser = { ...user, rewardPreference: rewardId };
    setUser(updatedUser);
    localStorage.setItem('spinAndGrowUser', JSON.stringify(updatedUser));
  };

  const canSpin = canUserSpin(user.dailySpinTimestamp);
  const showOnboarding = user.selectedInterests.length === 0;

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-md mx-auto space-y-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-glow">
              <Sparkles className="w-6 h-6 text-slate-900" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-100">Spin & Grow</h1>
              <p className="text-sm text-slate-400">Daily wisdom & rewards</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Link href="/history">
              <button className="p-2 hover:bg-slate-800 rounded-lg transition-all duration-200">
                <History className="w-5 h-5 text-slate-400" />
              </button>
            </Link>
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 hover:bg-slate-800 rounded-lg transition-all duration-200"
            >
              <Settings2 className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Wallet Connection */}
        <div className="glass-card p-4">
          <Wallet>
            <ConnectWallet>
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10" />
                <Name className="text-slate-100 font-medium" />
              </div>
            </ConnectWallet>
          </Wallet>
        </div>

        {/* Onboarding / Settings */}
        {(showOnboarding || showSettings) && (
          <div className="glass-card p-6 space-y-6">
            <InterestSelector
              selectedInterests={user.selectedInterests}
              onInterestsChange={handleInterestsChange}
            />
            
            {!showOnboarding && (
              <>
                <div className="border-t border-slate-700 pt-6">
                  <RewardPicker
                    selectedReward={user.rewardPreference}
                    onRewardChange={handleRewardChange}
                  />
                </div>
                
                <button
                  onClick={() => setShowSettings(false)}
                  className="w-full btn-primary"
                >
                  Save Settings
                </button>
              </>
            )}
            
            {showOnboarding && user.selectedInterests.length >= 3 && (
              <button
                onClick={() => setShowSettings(false)}
                className="w-full btn-primary"
              >
                Continue to Spin
              </button>
            )}
          </div>
        )}

        {/* Main Spin Interface */}
        {!showOnboarding && !showSettings && (
          <>
            {/* Spin Wheel */}
            <div className="glass-card p-8 flex flex-col items-center gap-6">
              <SpinWheel 
                isSpinning={isSpinning}
                onSpinComplete={handleSpinComplete}
              />
              
              <SpinButton
                canSpin={canSpin}
                isSpinning={isSpinning}
                nextSpinTime={nextSpinTime}
                onClick={handleSpin}
              />
            </div>

            {/* Result Display */}
            {currentResult && (
              <ResultCard result={currentResult} />
            )}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="glass-card p-4 text-center">
                <p className="text-2xl font-bold text-yellow-500">{user.spinHistory.length}</p>
                <p className="text-xs text-slate-400">Total Spins</p>
              </div>
              <div className="glass-card p-4 text-center">
                <p className="text-2xl font-bold text-blue-500">{user.spinHistory.length * 10}</p>
                <p className="text-xs text-slate-400">Points Earned</p>
              </div>
              <div className="glass-card p-4 text-center">
                <p className="text-2xl font-bold text-purple-500">{user.selectedInterests.length}</p>
                <p className="text-xs text-slate-400">Interests</p>
              </div>
            </div>

            {/* Extra Spins CTA */}
            <div className="glass-card p-6 text-center space-y-3">
              <p className="text-slate-300">Want more wisdom today?</p>
              <div className="flex gap-3 justify-center">
                <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-100 rounded-lg transition-all duration-200">
                  1 Spin - $0.01
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 rounded-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200">
                  10 Spins - $0.08
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
