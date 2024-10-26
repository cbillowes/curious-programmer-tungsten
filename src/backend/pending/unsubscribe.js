require('dotenv').config();
const { uuidv7 } = require('uuidv7');
const { db } = require('../firebase');
const { sendEmailFromTemplate } = require('../email');

const DOMAIN = process.env.DOMAIN;
const status = 'Requested to unsubscribe';

module.exports.unsubscribe = async (email, message, config) => {
  const subscriberRef = db.collection('subscribers').doc(email);
  const subscriber = await subscriberRef.get();
  if (subscriber.exists) {
    await subscriberRef.update({
      status,
      message,
      updated: new Date(),
    });
  } else {
    const token = uuidv7();
    await subscriberRef.set({
      status,
      message,
      email,
      token,
      created: new Date(),
    });
  }
  await sendEmailFromTemplate(
    config,
    email,
    'Sorry to See You Go! 💔',
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
