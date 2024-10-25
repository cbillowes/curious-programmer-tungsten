require('dotenv').config();
const { uuidv7 } = require('uuidv7');
const { db } = require('../firebase');
const { sendEmailFromTemplate } = require('../email');

const DOMAIN = process.env.DOMAIN;

module.exports.subscribe = async (email, message) => {
  const subscriberRef = db.collection('subscribers').doc(email);
  const subscriber = await subscriberRef.get();
  if (subscriber.exists) {
    await subscriberRef.update({
      status: 'unsubscribed',
      message,
      updated: new Date(),
    });
  } else {
    const token = uuidv7();
    await subscriberRef.set({
      status: 'unsubscribed',
      message,
      email,
      token,
      created: new Date(),
    });
  }
  await sendEmailFromTemplate(
    email,
    'Sorry to See You Go! 💔',
    'unsubscribe-confirm.html',
    'Just to be sure it’s really you, we need to confirm your email address.',
    {
      domain: DOMAIN,
      token: subscriber.data().token,
    },
  );
  return {
    statusCode: 200,
  };
};
