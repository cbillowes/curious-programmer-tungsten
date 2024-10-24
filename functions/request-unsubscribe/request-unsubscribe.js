const { unsubscribe } = require('../../src/backend/pending/unsubscribe');

// netlify functions:invoke request-unsubscribe --payload '{"email": ""}' --port 8888

module.exports.handler = async (event, context) => {
  const { email } = JSON.parse(event.body);
  return await unsubscribe(email);
};
