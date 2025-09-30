export interface User {
  farcasterId?: string;
  address?: string;
  selectedInterests: string[];
  dailySpinTimestamp: number;
  rewardPreference: string;
  spinHistory: SpinResult[];
}

export interface EducationalTip {
  id: string;
  content: string;
  interestTags: string[];
  rarity: 'common' | 'rare' | 'epic';
}

export interface MicroReward {
  id: string;
  name: string;
  type: 'points' | 'currency' | 'nft';
  description: string;
  value: number;
}

export interface SpinResult {
  tip: EducationalTip;
  reward: MicroReward;
  timestamp: number;
}

export interface SpinState {
  canSpin: boolean;
  nextSpinTime: number;
  isSpinning: boolean;
  result: SpinResult | null;
}
