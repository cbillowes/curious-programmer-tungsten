require('dotenv').config();
const { uuidv7 } = require('uuidv7');
const { db } = require('../firebase');
const { sendEmailFromTemplate } = require('../email');
const { DOMAIN } = require('../constants');

const status = 'Requested to unsubscribe';

module.exports.unsubscribe = async (email, message, config) => {
  const subscriberRef = db.collection('subscribers').doc(email);
  const subscriber = await subscriberRef.get();
  let token;
  if (subscriber.exists) {
    await subscriberRef.update({
      status,
      message,
      updated: new Date(),
    });
    token = subscriber.data().token;
  } else {
    token = uuidv7();
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
    'Are You Sure? 💔',
    'Just to be sure it’s really you, we need to confirm your email address.',
    {
      domain: DOMAIN,
      token,
    },
  );
  return {
    statusCode: 200,
  };
};
