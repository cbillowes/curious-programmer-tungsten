const fs = require('fs');
const path = require('path');
const { unsubscribe } = require('../../src/backend/confirmed/unsubscribe');
const { report } = require('../../src/backend/error');

// netlify functions:invoke unsubscribe --payload '{"token": ""}' --port 8888

module.exports.handler = async (event, context) => {
  const token = event.queryStringParameters.token;
  const template = fs.readFileSync(
    path.resolve(__dirname, '../emails/_template.html'),
    'utf8',
  );
  const body = fs.readFileSync(
    path.resolve(__dirname, '../emails/unsubscribe-success.html'),
    'utf8',
  );
  try {
    await unsubscribe(token, { template, body });
    return {
      statusCode: 302,
      headers: {
        Location: `${process.env.URL}/unsubscribed`,
      },
    };
  } catch (e) {
    await report(e);
    return {
      statusCode: 302,
      headers: {
        Location: `${process.env.URL}/error`,
      },
    };
  }
};
