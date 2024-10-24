require('dotenv').config();
const { db } = require('../firebase');
const { sendEmailFromTemplate } = require('../email');

const DOMAIN = process.env.DOMAIN;
const SENDER_TOKEN = process.env.SENDER_TOKEN;
const NEWSLETTER_GROUP_ID = 'avDxqL';
const ENDPOINT = new URL('https://api.sender.net/v2/subscribers');

const unsubscribeFromSender = async (token, email) => {
  let headers = {
    Authorization: `Bearer ${SENDER_TOKEN}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  let data = {
    email,
    groups: [NEWSLETTER_GROUP_ID],
    fields: { token },
  };

  const response = await fetch(ENDPOINT, {
    method: 'DELETE',
    headers,
    body: JSON.stringify(data),
  });

  const json = await response.json();

  if (json.message === 'Unauthenticated.') {
    throw new Error('Could not authenticate with the newsletter service.');
  }
};

const sendConfirmationEmail = async (token, email) => {
  await sendEmailFromTemplate(
    email,
    'Sorry to See You Go! 💔',
    '../emails/subscribe-success.html',
    'You have been unsubscribed from the Curious Programmer newsletter. 😢',
    {
      domain: DOMAIN,
      token,
    },
  );
};

module.exports.subscribe = async (token) => {
  const subscriberRef = db.collection('subscribers').doc(token);
  const subscriber = await subscriberRef.get();
  if (subscriber.exists) {
    const email = subscriber.data().email;
    await unsubscribeFromSender(token, email);
    await sendConfirmationEmail(token, email);
  }

  return {
    statusCode: 400,
    data: { reason: 'Invalid token.' },
  };
};
