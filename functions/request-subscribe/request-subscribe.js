const fs = require('fs');
const path = require('path');
const { subscribe } = require('../../src/backend/pending/subscribe');

// netlify functions:invoke request-subscribe --payload '{"email": ""}' --port 8888

module.exports.handler = async (event, context) => {
  const { email } = JSON.parse(event.body);
  const template = fs.readFileSync(
    path.resolve(__dirname, '../emails/_template.html'),
    'utf8',
  );
  const body = fs.readFileSync(
    path.resolve(__dirname, '../emails/subscribe-confirm.html'),
    'utf8',
  );
  return await subscribe(email, { template, body });
};
