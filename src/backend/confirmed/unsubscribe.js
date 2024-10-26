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

const sendConfirmationEmail = async (config, token, email) => {
  await sendEmailFromTemplate(
    config,
    email,
    'Sorry to See You Go! 💔',
    'You have been unsubscribed from the Curious Programmer newsletter. 😢',
    {
      domain: DOMAIN,
      token,
    },
  );
};

module.exports.unsubscribe = async (token, config) => {
  const subscriberRef = await db
    .collection('subscribers')
    .where('token', '==', token)
    .get();
  const doc = subscriberRef.docs[0];
  const data = doc?.data();
  if (data) {
    await db
      .collection('subscribers')
      .doc(doc.id)
      .update({ status: 'Unsubscribed', updated: new Date() });
    await unsubscribeFromSender(token, data.email);
    await sendConfirmationEmail(config, token, data.email);
    return data;
  }
  throw new Error('Invalid token.');
};
