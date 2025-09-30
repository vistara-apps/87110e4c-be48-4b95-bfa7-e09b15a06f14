# Spin & Grow - Daily Wisdom & Rewards

A Base Mini App built with Next.js 15, OnchainKit, and Tailwind CSS.

## Features

- 🎡 Daily spin-to-win mechanic
- 📚 Educational micro-tips based on user interests
- 🏆 Micro-reward system with customization
- 🔗 Base Wallet integration via OnchainKit
- 🎨 Professional finance-themed UI (dark navy & gold)
- 📱 Mobile-first responsive design

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- OnchainKit (Base Wallet integration)
- Wagmi & Viem

## Project Structure

```
app/
├── page.tsx (main spin interface)
├── history/page.tsx (spin history)
├── layout.tsx (root layout)
├── providers.tsx (OnchainKit provider)
└── globals.css (custom theme)

components/
├── SpinWheel.tsx (animated wheel)
├── SpinButton.tsx (primary CTA)
├── ResultCard.tsx (tip/reward display)
├── InterestSelector.tsx (interest tags)
└── RewardPicker.tsx (reward customization)

lib/
├── types.ts (TypeScript interfaces)
├── constants.ts (tips, rewards, interests)
└── utils.ts (helper functions)
```

## Features Implementation

### Daily Spin Mechanic
- Users can spin once per 24 hours
- Countdown timer shows time until next spin
- Spin animation with smooth easing

### Educational Tips
- 10+ curated tips across 8 interest categories
- Tips filtered by user's selected interests
- Rarity system (common, rare, epic)

### Micro-Rewards
- 5 different reward types
- User-customizable reward preferences
- Points, currency, and NFT badge rewards

### Interest-Based Curation
- Users select 3-5 interests
- Tips prioritized based on selections
- 8 categories: AI, Web3, Productivity, Design, Finance, Health, Marketing, Programming

## Micro-Transaction Model

- Extra spins: $0.01 each
- Spin pack: 10 spins for $0.08
- Future: Subscription model for unlimited spins

## License

MIT
