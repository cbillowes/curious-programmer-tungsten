require('dotenv').parse(".env");

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').parse(".env.production")
}

module.exports.DOMAIN = process.env.DOMAIN;
module.exports.SENDER_TOKEN = process.env.SENDER_TOKEN;
module.exports.NEWSLETTER_GROUP_ID = 'avDxqL';
module.exports.NEWSLETTER_ENDPOINT = new URL('https://api.sender.net/v2/subscribers');

