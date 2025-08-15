export const SOCIAL_LINKS = {
  twitter: process.env.NEXT_PUBLIC_TWITTER_LINK || 'https://twitter.com/fittrack',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_LINK || 'https://instagram.com/fittrack',
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_LINK || 'https://facebook.com/fittrack',
} as const;

export const APP_DOWNLOAD_LINKS = {
  googlePlay: process.env.NEXT_PUBLIC_GOOGLE_PLAY_LINK || 'https://play.google.com/store/apps/details?id=com.fittrack.app',
  appStore: process.env.NEXT_PUBLIC_APP_STORE_LINK || 'https://apps.apple.com/app/fittrack/id1234567890',
} as const;

export const CONTACT_LINKS = {
  calendly: process.env.NEXT_PUBLIC_CONTACT_CALENDLY_LINK || 'https://calendly.com/fittrack/support',
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'support@fittrack.app',
} as const;

export const COMPANY_INFO = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'FitTrack Inc.',
} as const;
