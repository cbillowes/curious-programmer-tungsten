const fs = require('fs');
const path = require('path');
const { subscribe } = require('../../src/backend/confirmed/subscribe');

// netlify functions:invoke subscribe --payload '{"token": ""}' --port 8888

module.exports.handler = async (event, context) => {
  const token = event.queryStringParameters.token;
  const template = fs.readFileSync(
    path.resolve(__dirname, '../emails/_template.html'),
    'utf8',
  );
  const body = fs.readFileSync(
    path.resolve(__dirname, '../emails/subscribe-success.html'),
    'utf8',
  );
  try {
    await subscribe(token, { template, body });
    return {
      statusCode: 302,
      headers: {
        Location: `${process.env.URL}/subscribed`,
      },
    };
  } catch (e) {
    return {
      statusCode: 302,
      headers: {
        Location: `${process.env.URL}/error`,
      },
    };
  }
};
