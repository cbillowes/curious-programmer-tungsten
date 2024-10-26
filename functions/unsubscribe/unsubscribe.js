const fs = require('fs');
const path = require('path');
const { unsubscribe } = require('../../src/backend/confirmed/unsubscribe');

// netlify functions:invoke unsubscribe --payload '{"token": ""}' --port 8888

module.exports.handler = async (event, context) => {
  const { token } = JSON.parse(event.body);
  const template = fs.readFileSync(
    path.resolve(__dirname, '../emails/_template.html'),
    'utf8',
  );
  const body = fs.readFileSync(
    path.resolve(__dirname, '../emails/', 'unsubscribe-success.html'),
    'utf8',
  );
  await unsubscribe(token, { template, body });
  return {
    statusCode: 302,
    headers: {
      Location: `${process.env.URL}/unsubscribed`,
    },
  };
};
