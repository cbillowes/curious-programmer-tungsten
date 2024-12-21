require('dotenv').parse(".env");

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').parse(".env.production")
}

export const DOMAIN = process.env.DOMAIN;
export const SENDER_TOKEN = process.env.SENDER_TOKEN;
export const NEWSLETTER_GROUP_ID = 'avDxqL';
export const NEWSLETTER_ENDPOINT = new URL('https://api.sender.net/v2/subscribers');

