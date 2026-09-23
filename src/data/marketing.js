const POSTER_DIR = '/digital_marketing_data/posters'
const CAROUSEL_DIR = '/digital_marketing_data/Carousels'
const MOTION_DIR = '/digital_marketing_data/Motion graphic'
const VIDEO_DIR = '/digital_marketing_data/Video editing'
const POSTER_FRAMES = '/digital_marketing_data/_video_posters'

const slug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

function posterSet(folder, brand, files) {
  return files.map((file, i) => ({
    id: `${slug(brand)}-${i + 1}`,
    title: brand,
    client: `Poster ${i + 1}`,
    src: `${POSTER_DIR}/${folder}/${file}`,
  }))
}

function carousel(file, title, panels, client) {
  return { id: slug(title), title, client, src: `${CAROUSEL_DIR}/${file}`, panels }
}

function reel(title, dir, file, frame) {
  return {
    id: slug(title),
    title,
    src: `${dir}/${file}`,
    poster: `${POSTER_FRAMES}/${frame}`,
  }
}

const POSTER_ITEMS = [
  ...posterSet('Dream Destination', 'Dream Destination', [
    'Dream_Destination  (1).webp',
    'Dream_Destination  (2).webp',
    'Dream_Destination  (3).webp',
  ]),
  ...posterSet('Globex', 'Globex', ['globex 01.webp', 'globex 02.webp', 'globex 03.webp']),
  ...posterSet('Imperium Spaces', 'Imperium Spaces', [
    'Imperium Spaces (1).webp',
    'Imperium Spaces (2).webp',
    'Imperium Spaces (3).webp',
    'Imperium Spaces (4).webp',
  ]),
  ...posterSet('Lifespace', 'Lifespace Interiors', [
    'Lifespace Interiors (1).webp',
    'Lifespace Interiors (2).webp',
    'Lifespace Interiors (3).webp',
    'Lifespace Interiors (4).webp',
    'Lifespace Interiors (5).webp',
  ]),
  ...posterSet('Medicohut', 'Medicohut', ['Medicohut-01.webp', 'Medicohut-02.webp']),
  ...posterSet('Myhomes', 'Myhomes', [
    'Myhomes-01.webp',
    'Myhomes-02.webp',
    'Myhomes-03.webp',
    'Myhomes-04.webp',
  ]),
  ...posterSet('Sarogana', 'Sarogana', ['Sarogana 01.webp', 'Sarogana 02.webp', 'Sarogana 03.webp']),
  ...posterSet('Souvenirs of India', 'Souvenirs of India', [
    'Souvenirs of India -01.webp',
    'Souvenirs of India -02.webp',
    'Souvenirs of India -03.webp',
  ]),
  ...posterSet('Vscrapit', 'Vscrapit', ['vscrapit  (1).webp', 'vscrapit (2).webp']),
]

const CAROUSEL_ITEMS = [
  carousel('Honey.webp', 'Raw honey', 4, 'KG Organic'),
  carousel('organic ghee.webp', 'Ghee, step by step', 4, 'KG Organic'),
  carousel('organic jaggery.webp', 'Organic jaggery', 4, 'KG Organic'),
  carousel('turmeric powder (1).webp', 'Turmeric powder', 4, 'KG Organic'),
  carousel('memon_s.webp', "Memon's", 4, 'Women clothing'),
  carousel('COORG.webp', 'Coorg', 6),
  carousel('chardam carousal.webp', 'Chardam', 5),
  carousel('Gokarna carousal.webp', 'Gokarna', 4),
  carousel('skandagiri carousal.webp', 'Skandagiri', 5),
]

const MOTION_ITEMS = [
  reel('Neuvoke 1', MOTION_DIR, 'neuvoke 1.mp4', 'neuvoke_1.webp'),
  reel('Neuvoke 4', MOTION_DIR, 'neuvoke 4_revised.mp4', 'neuvoke_4_revised.webp'),
  reel('Neuvoke 5', MOTION_DIR, 'neuvoke 5.mp4', 'neuvoke_5.webp'),
  reel('Digital marketing reel', MOTION_DIR, 'digital marketing revised 2.mp4', 'digital_marketing_revised_2.webp'),
]

const VIDEO_ITEMS = [
  reel('Jaguar Fitness', VIDEO_DIR, 'jaguar fitness.mp4', 'jaguar_fitness.webp'),
  reel('Meraki Aesthetics 7', VIDEO_DIR, 'meraki aesthetics 7 revision 2.mp4', 'meraki_aesthetics_7_revision_2.webp'),
  reel('Meraki Aesthetics 8', VIDEO_DIR, 'meraki aesthetics 8 (1).mp4', 'meraki_aesthetics_8_1.webp'),
  reel('Lilac Workshop', VIDEO_DIR, 'lilac-workshop.mp4', 'lilac-workshop.webp'),
  reel('Launch product', VIDEO_DIR, 'launch product. 1.mp4', 'launch_product._1.webp'),
  reel('Giveaway', VIDEO_DIR, 'give away-1.mp4', 'give_away-1.webp'),
  reel('Ad copy 2', VIDEO_DIR, 'ad copy 2.mp4', 'ad_copy_2.webp'),
  reel('Pretty Shimmiring Reel 2', VIDEO_DIR, 'Pretty Shimmiring Reel 2  (1).mp4', 'Pretty_Shimmiring_Reel_2_1.webp'),
  reel('TWM GM Collections', VIDEO_DIR, 'TWM GM collections.mp4', 'TWM_GM_collections.webp'),
]

export const WORK_TABS = [
  {
    key: 'poster',
    label: 'Poster',
    slot: 'poster',
    kind: 'image',
    ratio: '4 / 5',
    format: '1080 × 1350 · JPG or PNG',
    slots: 6,
    items: POSTER_ITEMS,
  },
  {
    key: 'carousel',
    label: 'Carousel',
    slot: 'carousel',
    kind: 'carousel',
    ratio: '4 / 5',
    format: '1080 × 1350 · 4 to 8 slides',
    slots: 6,
    items: CAROUSEL_ITEMS,
  },
  {
    key: 'motion',
    label: 'Motion Graphics',
    slot: 'motion graphic',
    kind: 'video',
    ratio: '9 / 16',
    format: '1080 × 1920 · MP4 or GIF',
    slots: 6,
    items: MOTION_ITEMS,
  },
  {
    key: 'video',
    label: 'Video Editing',
    slot: 'video',
    kind: 'video',
    ratio: '9 / 16',
    format: '1080 × 1920 · MP4',
    slots: 6,
    items: VIDEO_ITEMS,
  },
]

export const PROMISES = [
  { value: '2 to 5x', label: 'brand reach we build towards' },
  { value: '90 to 120', label: 'days to a running lead system' },
  { value: '4 hrs', label: 'of your time, per month' },
]

export const JOURNEY = [
  {
    num: '1',
    title: 'Onboarding',
    body: 'We start with a call to learn about you, your business, your niche, your target audience and what a good month looks like.',
  },
  {
    num: '2',
    title: 'Strategy',
    body: 'That turns into a content plan: the angles we own, the formats, the posting cadence, and the offer every post points at.',
  },
  {
    num: '3',
    title: 'Production',
    body: 'You record one batch. We script it, edit it, caption it and design the stills, so a month of content comes out of a single sitting.',
  },
  {
    num: '4',
    title: 'Distribution',
    body: 'Everything goes out on schedule, cut for each platform, with comments and DMs handled in your voice.',
  },
  {
    num: '5',
    title: 'Reporting',
    body: 'A monthly read on reach, engagement, leads and calls booked, plus what changes in the next month and why.',
  },
]

export const SAMPLE_STORIES = true

export const STORIES = [
  {
    kind: 'quote',
    mark: 'DF',
    result: '2.4x reach in ninety days',
    quote:
      'They took the whole content load off my plate. I record once a month and the rest of it just happens, on schedule, in my voice.',
    name: 'D2C founder',
    role: 'Skincare · Bengaluru',
  },
  {
    kind: 'person',
    mark: 'SF',
    name: 'Service founder',
    role: 'Agency · Pune',
    note: 'Posting 4x a week with one hour a week of input.',
    platforms: ['instagram', 'youtube'],
  },
  {
    kind: 'quote',
    mark: 'BF',
    result: '18 inbound calls a month',
    quote:
      'We stopped guessing. The plan says which idea becomes a post, which post becomes a lead, and what we drop when it does not.',
    name: 'B2B founder',
    role: 'SaaS · Remote',
  },
  {
    kind: 'person',
    mark: 'AO',
    name: 'Agency owner',
    role: 'Recruiting · Hyderabad',
    note: 'Inbound calls booked from content, not cold outreach.',
    platforms: ['instagram', 'x'],
  },
  {
    kind: 'quote',
    mark: 'PB',
    result: 'Four hours a month, total',
    quote: 'Four hours of my month, and the channel finally looks like a business rather than a hobby.',
    name: 'Personal brand',
    role: 'Coaching · Mumbai',
  },
]

export const FLOATERS = [
  { icon: 'instagram', side: 'left', top: '3%', size: 34, offset: 52, delay: 0 },
  { icon: 'pen', side: 'left', top: '8%', size: 24, offset: 92, delay: 1100 },
  { icon: 'heart', side: 'left', top: '13%', size: 28, offset: 46, delay: 2200 },
  { icon: 'camera', side: 'left', top: '18%', size: 30, offset: 84, delay: 300 },
  { icon: 'play', side: 'left', top: '23%', size: 26, offset: 60, delay: 2600 },
  { icon: 'image', side: 'left', top: '28%', size: 22, offset: 96, delay: 1500 },
  { icon: 'mic', side: 'left', top: '33%', size: 30, offset: 48, delay: 700 },
  { icon: 'scissors', side: 'left', top: '38%', size: 26, offset: 78, delay: 1900 },
  { icon: 'trend', side: 'left', top: '43%', size: 32, offset: 56, delay: 3400 },
  { icon: 'wand', side: 'left', top: '48%', size: 24, offset: 90, delay: 500 },
  { icon: 'at', side: 'left', top: '53%', size: 28, offset: 44, delay: 2400 },
  { icon: 'comment', side: 'left', top: '58%', size: 26, offset: 82, delay: 1300 },
  { icon: 'instagram', side: 'left', top: '63%', size: 30, offset: 58, delay: 3100 },
  { icon: 'heart', side: 'left', top: '68%', size: 22, offset: 94, delay: 900 },
  { icon: 'pen', side: 'left', top: '73%', size: 28, offset: 50, delay: 2000 },
  { icon: 'youtube', side: 'left', top: '78%', size: 32, offset: 80, delay: 400 },
  { icon: 'camera', side: 'left', top: '83%', size: 24, offset: 62, delay: 2700 },
  { icon: 'play', side: 'left', top: '88%', size: 30, offset: 88, delay: 1600 },
  { icon: 'mic', side: 'left', top: '93%', size: 26, offset: 46, delay: 3300 },
  { icon: 'linkedin', side: 'left', top: '97%', size: 28, offset: 76, delay: 1000 },

  { icon: 'youtube', side: 'right', top: '5%', size: 34, offset: 52, delay: 400 },
  { icon: 'twitter', side: 'right', top: '10%', size: 24, offset: 90, delay: 1700 },
  { icon: 'facebook', side: 'right', top: '15%', size: 28, offset: 48, delay: 2900 },
  { icon: 'comment', side: 'right', top: '20%', size: 30, offset: 86, delay: 800 },
  { icon: 'linkedin', side: 'right', top: '25%', size: 26, offset: 58, delay: 2100 },
  { icon: 'at', side: 'right', top: '30%', size: 22, offset: 94, delay: 3400 },
  { icon: 'instagram', side: 'right', top: '35%', size: 30, offset: 50, delay: 1200 },
  { icon: 'trend', side: 'right', top: '40%', size: 26, offset: 80, delay: 2500 },
  { icon: 'wand', side: 'right', top: '45%', size: 32, offset: 54, delay: 300 },
  { icon: 'scissors', side: 'right', top: '50%', size: 24, offset: 92, delay: 1800 },
  { icon: 'play', side: 'right', top: '55%', size: 28, offset: 46, delay: 3000 },
  { icon: 'image', side: 'right', top: '60%', size: 26, offset: 84, delay: 600 },
  { icon: 'twitter', side: 'right', top: '65%', size: 30, offset: 60, delay: 2300 },
  { icon: 'camera', side: 'right', top: '70%', size: 22, offset: 96, delay: 1400 },
  { icon: 'facebook', side: 'right', top: '75%', size: 28, offset: 48, delay: 3200 },
  { icon: 'heart', side: 'right', top: '80%', size: 32, offset: 82, delay: 1000 },
  { icon: 'youtube', side: 'right', top: '85%', size: 24, offset: 56, delay: 2600 },
  { icon: 'at', side: 'right', top: '89%', size: 30, offset: 88, delay: 1900 },
  { icon: 'comment', side: 'right', top: '93%', size: 26, offset: 44, delay: 3500 },
  { icon: 'linkedin', side: 'right', top: '97%', size: 28, offset: 78, delay: 700 },
]

export const BENEFITS = [
  {
    icon: 'growth',
    title: 'Viral growth',
    body: 'Hooks and formats built to travel, so reach compounds instead of resetting every week.',
  },
  {
    icon: 'strategy',
    title: 'Personalised strategy',
    body: 'A plan shaped around your niche, your offer and your audience, not a recycled template.',
  },
  {
    icon: 'time',
    title: 'One hour a week',
    body: 'You record. Scripts, edits, captions, posting, comments and DMs are ours.',
  },
  {
    icon: 'leads',
    title: 'Lead generation machine',
    body: 'Inbound and outbound systems that turn attention into booked calls, tracked end to end.',
  },
  {
    icon: 'platforms',
    title: 'Growth across platforms',
    body: 'Instagram, LinkedIn, YouTube and X, cut for each platform rather than cross posted.',
  },
  {
    icon: 'guarantee',
    title: 'Guaranteed results',
    body: 'The target is agreed in writing before we start, then reviewed and reported every month.',
  },
]
