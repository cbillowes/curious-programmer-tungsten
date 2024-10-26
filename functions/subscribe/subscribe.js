const fs = require('fs');
const path = require('path');
const { subscribe } = require('../../src/backend/confirmed/subscribe');

// netlify functions:invoke subscribe --payload '{"token": ""}' --port 8888

module.exports.handler = async (event, context) => {
  const { token } = JSON.parse(event.body);
  const template = fs.readFileSync(
    path.resolve(__dirname, '../emails/_template.html'),
    'utf8',
  );
  const body = fs.readFileSync(
    path.resolve(__dirname, '../emails/', 'subscribe-success.html'),
    'utf8',
  );
  await subscribe(token, { template, body });
  return {
    statusCode: 302,
    headers: {
      Location: `${process.env.URL}/subscribed`,
    },
  };
};
