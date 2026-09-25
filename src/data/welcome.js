// Hero search: each service shows as a search result. Queries are typed out in turn;
// keywords match what a visitor types (longer matches weigh more).
export const HERO_SEARCH = [
  {
    to: '/seo',
    title: 'SEO that brings customers, not just traffic',
    queries: ['seo agency in bengaluru', 'get my site on google'],
    keywords: ['seo', 'rank', 'search', 'organic', 'traffic', 'keyword', 'on google', 'google search', 'visibility'],
  },
  {
    to: '/ads',
    title: 'Google and Meta ads that pay back',
    queries: ['google ads expert', 'meta ads for my brand'],
    keywords: ['ads', 'advert', 'ppc', 'meta', 'facebook', 'campaign', 'leads', 'google ads', 'instagram ads', 'budget'],
  },
  {
    to: '/digital-marketing',
    title: 'Reels and social content that books calls',
    queries: ['reels for my business'],
    keywords: ['reel', 'content', 'social', 'instagram', 'video', 'post', 'marketing', 'brand', 'youtube', 'linkedin', 'logo', 'design'],
  },
  {
    to: '/web-development',
    title: 'Websites and apps built to convert',
    queries: ['build my website', 'shopify developer'],
    keywords: ['website', 'web', 'site', 'app', 'shopify', 'wordpress', 'store', 'develop', 'landing', 'ecommerce'],
  },
]

export const PATHS = [
  {
    key: 'seo',
    to: '/seo',
    icon: 'search',
    title: 'SEO',
    body: 'Own the searches that already bring you customers, and the ones your competitors are quietly taking.',
    meta: '11 client properties in the portfolio',
  },
  {
    key: 'ads',
    to: '/ads',
    icon: 'megaphone',
    title: 'Advertize',
    body: 'Google and Meta, managed against one number: what comes back for what you spend.',
    meta: 'Live spend dashboard and results',
  },
  {
    key: 'marketing',
    to: '/digital-marketing',
    icon: 'clapper',
    title: 'Digital Marketing',
    body: 'Content and social that turns attention into booked calls, on four hours of your month.',
    meta: 'Process, stories and benefits',
  },
  {
    key: 'webdev',
    to: '/web-development',
    icon: 'code',
    title: 'Web & Apps',
    body: 'WordPress, Shopify or fully custom builds, handed over with the repo and the domain in your name.',
    meta: 'Stack, projects and approach',
  },
]

export const SERVICE_FLOATERS = [
  { icon: 'search', side: 'left', top: '12%', offset: 92, size: 28, delay: 0 },
  { icon: 'megaphone', side: 'left', top: '30%', offset: 54, size: 26, delay: 900 },
  { icon: 'trend', side: 'left', top: '48%', offset: 96, size: 30, delay: 1800 },
  { icon: 'cart', side: 'left', top: '65%', offset: 60, size: 24, delay: 2700 },
  { icon: 'monitor', side: 'left', top: '82%', offset: 88, size: 28, delay: 3600 },
  { icon: 'share', side: 'right', top: '15%', offset: 62, size: 24, delay: 500 },
  { icon: 'clapper', side: 'right', top: '33%', offset: 98, size: 28, delay: 1400 },
  { icon: 'target', side: 'right', top: '52%', offset: 58, size: 26, delay: 2300 },
  { icon: 'cursor', side: 'right', top: '70%', offset: 94, size: 30, delay: 3200 },
  { icon: 'code', side: 'right', top: '86%', offset: 64, size: 26, delay: 4100 },
]

export const SERVICE_ROWS = [
  [
    { label: 'SEO', icon: 'search' },
    { label: 'Google Ads', icon: 'target' },
    { label: 'Meta Ads', icon: 'instagram' },
    { label: 'Social Media', icon: 'share' },
    { label: 'Video Editing', icon: 'video' },
    { label: 'Creative Design', icon: 'palette' },
    { label: 'Content Strategy', icon: 'compass' },
  ],
  [
    { label: 'React', icon: 'atom' },
    { label: 'Web Development', icon: 'code' },
    { label: 'App Development', icon: 'smartphone' },
    { label: 'WordPress', icon: 'template' },
    { label: 'Shopify', icon: 'bag' },
    { label: 'Backend Maintenance', icon: 'server' },
    { label: 'Analytics & Tracking', icon: 'chart' },
  ],
]
