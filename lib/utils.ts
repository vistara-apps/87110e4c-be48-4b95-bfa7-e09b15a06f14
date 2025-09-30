import { SPIN_COOLDOWN_MS } from './constants';

export function canUserSpin(lastSpinTimestamp: number): boolean {
  const now = Date.now();
  return now - lastSpinTimestamp >= SPIN_COOLDOWN_MS;
}

export function getNextSpinTime(lastSpinTimestamp: number): number {
  return lastSpinTimestamp + SPIN_COOLDOWN_MS;
}

export function formatTimeUntilNextSpin(nextSpinTime: number): string {
  const now = Date.now();
  const diff = nextSpinTime - now;
  
  if (diff <= 0) return 'Now!';
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  return `${hours}h ${minutes}m`;
}

export function getRandomTipByInterests(interests: string[], tips: any[]): any {
  // Filter tips by user interests
  const relevantTips = tips.filter(tip => 
    tip.interestTags.some((tag: string) => interests.includes(tag))
  );
  
  // If no relevant tips, return random tip
  const tipsToChooseFrom = relevantTips.length > 0 ? relevantTips : tips;
  
  return tipsToChooseFrom[Math.floor(Math.random() * tipsToChooseFrom.length)];
}

export function getRandomReward(rewards: any[]): any {
  return rewards[Math.floor(Math.random() * rewards.length)];
}
