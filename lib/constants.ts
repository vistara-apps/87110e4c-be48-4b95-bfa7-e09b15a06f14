import { EducationalTip, MicroReward } from './types';

export const INTERESTS = [
  'AI & Machine Learning',
  'Web3 & Blockchain',
  'Productivity',
  'Design & UX',
  'Finance & DeFi',
  'Health & Wellness',
  'Marketing',
  'Programming',
];

export const EDUCATIONAL_TIPS: EducationalTip[] = [
  {
    id: '1',
    content: 'Smart contracts are self-executing contracts with terms directly written into code. They run on blockchain networks like Ethereum and Base.',
    interestTags: ['Web3 & Blockchain'],
    rarity: 'common',
  },
  {
    id: '2',
    content: 'The Pomodoro Technique: Work for 25 minutes, then take a 5-minute break. After 4 cycles, take a longer 15-30 minute break.',
    interestTags: ['Productivity'],
    rarity: 'common',
  },
  {
    id: '3',
    content: 'AI models like GPT use transformer architecture, which processes entire sequences of data simultaneously rather than sequentially.',
    interestTags: ['AI & Machine Learning'],
    rarity: 'rare',
  },
  {
    id: '4',
    content: 'DeFi (Decentralized Finance) allows financial transactions without traditional intermediaries like banks, using smart contracts instead.',
    interestTags: ['Finance & DeFi', 'Web3 & Blockchain'],
    rarity: 'common',
  },
  {
    id: '5',
    content: 'The 80/20 rule (Pareto Principle): 80% of results come from 20% of efforts. Focus on high-impact activities.',
    interestTags: ['Productivity', 'Marketing'],
    rarity: 'common',
  },
  {
    id: '6',
    content: 'Figma\'s auto-layout feature mimics CSS flexbox, making responsive design faster and more intuitive.',
    interestTags: ['Design & UX'],
    rarity: 'rare',
  },
  {
    id: '7',
    content: 'TypeScript adds static typing to JavaScript, catching errors at compile-time rather than runtime.',
    interestTags: ['Programming'],
    rarity: 'common',
  },
  {
    id: '8',
    content: 'NFTs (Non-Fungible Tokens) represent unique digital assets on the blockchain, unlike cryptocurrencies which are fungible.',
    interestTags: ['Web3 & Blockchain'],
    rarity: 'epic',
  },
  {
    id: '9',
    content: 'The 7±2 rule: Humans can hold 5-9 items in working memory. Design interfaces with this cognitive limit in mind.',
    interestTags: ['Design & UX'],
    rarity: 'rare',
  },
  {
    id: '10',
    content: 'Compound interest is the 8th wonder of the world. Start investing early to maximize exponential growth.',
    interestTags: ['Finance & DeFi'],
    rarity: 'common',
  },
];

export const MICRO_REWARDS: MicroReward[] = [
  {
    id: '1',
    name: 'Knowledge Points',
    type: 'points',
    description: 'Earn points to unlock premium tips',
    value: 10,
  },
  {
    id: '2',
    name: 'Wisdom Coins',
    type: 'currency',
    description: 'In-app currency for extra spins',
    value: 5,
  },
  {
    id: '3',
    name: 'Rare Insight Badge',
    type: 'nft',
    description: 'Collectible digital badge',
    value: 1,
  },
  {
    id: '4',
    name: 'Double Points',
    type: 'points',
    description: '2x points on next spin',
    value: 20,
  },
  {
    id: '5',
    name: 'Golden Ticket',
    type: 'currency',
    description: 'Free extra spin',
    value: 1,
  },
];

export const SPIN_COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24 hours
