const { subscribe } = require('../../src/backend/confirmed/subscribe');

// netlify functions:invoke subscribe --payload '{"token": ""}' --port 8888

module.exports.handler = async (event, context) => {
  const { token } = JSON.parse(event.body);
  await subscribe(token);
  return {
    statusCode: 302,
    headers: {
      Location: `${process.env.URL}/subscribed`,
    },
  };
};
