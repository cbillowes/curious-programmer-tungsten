require('dotenv').config();
const { uuidv7 } = require('uuidv7');
const { db } = require('../firebase');
const { sendEmailFromTemplate } = require('../email');

const DOMAIN = process.env.DOMAIN;
const status = 'Requested to subscribe';

module.exports.subscribe = async (email, referrer, config) => {
  const subscriberRef = db.collection('subscribers').doc(email);
  const subscriber = await subscriberRef.get();
  let token;
  if (subscriber.exists) {
    await subscriberRef.update({ status, referrer, updated: new Date() });
    token = subscriber.data().token;
  } else {
    token = uuidv7();
    await subscriberRef.set({
      status,
      referrer,
      email,
      token,
      created: new Date(),
    });
  }
  await sendEmailFromTemplate(
    config,
    email,
    'Confirm Your Subscription to Curious Programmer.',
    'Awesome! 🎈 Just to be sure it’s really you, we need to confirm your email address.',
    {
      domain: DOMAIN,
      token,
    },
  );
  return {
    statusCode: 200,
  };
};
