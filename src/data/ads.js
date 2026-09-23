export const ACCOUNT = {
  label: 'Sample account · last 30 days',
  tiles: [
    { label: 'Ad spend', value: '₹9.7 L', note: '30 days' },
    { label: 'Revenue attributed', value: '₹55.9 L', note: 'platform + GA4' },
    { label: 'Blended ROAS', value: '5.7x', note: 'return ÷ spend' },
    { label: 'Cost per lead', value: '₹212', note: 'form and call' },
  ],
  spend: [15, 16, 17, 19, 20, 21, 22, 23, 25, 25, 26, 29, 29, 30, 32, 33, 33, 36, 36, 37, 38, 42, 40, 44, 44, 44, 47, 47, 50, 51],
  revenue: [96, 104, 112, 101, 124, 131, 118, 140, 152, 139, 158, 171, 149, 166, 182, 173, 195, 186, 208, 199, 221, 238, 226, 247, 262, 251, 271, 289, 278, 301],
}

export const SIGNALS = [
  { key: 'CPC', value: '₹18.40' },
  { key: 'CTR', value: '3.4%' },
  { key: 'CVR', value: '2.9%' },
  { key: 'CPL', value: '₹212' },
  { key: 'ROAS', value: '5.7x' },
  { key: 'MER', value: '4.2x' },
]

export const BRANDS = [
  'Pharmaclinix',
  'Jalaparva',
  'VScrapIt',
  'Souvenirs of India',
  'SND Masala',
  'UK Foods',
  'Krypton Tools',
  'Lifespace Designs',
  'Orika Naturals',
  'Svarnadeep',
]

export const CHANNELS = [
  {
    key: 'google',
    name: 'Google Ads',
    focus: 'Search, Shopping, Performance Max',
    lede: 'Captures people who are already looking. High intent, higher CPCs, faster to prove.',
    runs: [
      'Search split by intent: brand, category, competitor, long tail',
      'Shopping and PMax built on a clean product feed',
      'Negative keyword hygiene reviewed every week',
      'Bids set against margin, not just revenue',
    ],
    kpis: ['CPC', 'Impression share', 'Lost IS (budget)', 'CVR', 'ROAS'],
  },
  {
    key: 'meta',
    name: 'Meta Ads',
    focus: 'Feed, Reels, Stories, Retargeting',
    lede: 'Creates demand in front of people who were not looking yet. Cheap reach, creative led, compounding.',
    runs: [
      'A creative engine: new angles and hooks every week',
      'Broad and Advantage+ testing against tight audiences',
      'Retargeting ladders by depth of engagement',
      'Frequency caps so you are not renting the same eyeballs',
    ],
    kpis: ['CPM', 'Hook rate', 'CTR', 'Frequency', 'CPL'],
  },
]

export const RHYTHM = [
  { day: 'Mon', title: 'Pacing and rebalancing', body: 'Budget moves to whichever channel is buying cheaper this week.' },
  { day: 'Tue', title: 'Search terms and placements', body: 'Wasted spend cut: negatives added, weak placements excluded.' },
  { day: 'Wed', title: 'Creative batch live', body: 'Three to five new angles shipped, the losers paused within days.' },
  { day: 'Thu', title: 'Landing page or offer test', body: 'One variable at a time, measured against the control.' },
  { day: 'Fri', title: 'Written report', body: 'Spend, CAC, ROAS and next week, in your inbox before the weekend.' },
]

export const METRICS = [
  {
    name: 'ROAS / MER',
    question: 'Is the spend paying for itself?',
    action: 'Two weeks below target and we cut the weakest ad set before adding budget.',
  },
  {
    name: 'CAC / CPL',
    question: 'What does a customer cost us?',
    action: 'Rising cost with flat order value is a creative or offer problem, not a bidding one.',
  },
  {
    name: 'CTR',
    question: 'Is the creative earning attention?',
    action: 'Below benchmark, the hook gets rewritten before the budget is touched.',
  },
  {
    name: 'CVR',
    question: 'Does the page convert the click?',
    action: 'Strong CTR with weak CVR is a landing page problem. We fix that before scaling spend.',
  },
  {
    name: 'Frequency',
    question: 'Are we showing up too often?',
    action: 'Past three impressions a week per person, creative rotates or the audience widens.',
  },
  {
    name: 'Impression share',
    question: 'How much of the market do we win?',
    action: 'Losing share on profitable terms means there is headroom to spend, not a reason to hold back.',
  },
]

export const TRACKING = [
  'UTMs that survive redirects and shorteners',
  'GA4 events for form, call and checkout',
  'Conversions API and server side events',
  'CRM outcomes pushed back as offline conversions',
  'Weekly reconciliation against your own numbers',
]
