const { unsubscribe } = require('../../src/backend/confirmed/unsubscribe');

// netlify functions:invoke unsubscribe --payload '{"token": ""}' --port 8888

module.exports.handler = async (event, context) => {
  const { token } = JSON.parse(event.body);
  await unsubscribe(token);
  return {
    statusCode: 302,
    headers: {
      Location: `${process.env.URL}/unsubscribed`,
    },
  };
};
