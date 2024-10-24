const { subscribe } = require('../../src/backend/pending/subscribe');

// netlify functions:invoke request-subscribe --payload '{"email": ""}' --port 8888

module.exports.handler = async (event, context) => {
  const { email } = JSON.parse(event.body);
  return await subscribe(email);
};
