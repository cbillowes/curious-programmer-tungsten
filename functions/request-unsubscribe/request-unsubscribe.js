const fs = require('fs');
const path = require('path');
const { unsubscribe } = require('../../src/backend/pending/unsubscribe');

// netlify functions:invoke request-unsubscribe --payload '{"email": "", "message": ""}' --port 8888

module.exports.handler = async (event, context) => {
  const { email, message } = JSON.parse(event.body);
  const template = fs.readFileSync(
    path.resolve(__dirname, '../emails/_template.html'),
    'utf8',
  );
  const body = fs.readFileSync(
    path.resolve(__dirname, '../emails/', 'unsubscribe-confirm.html'),
    'utf8',
  );
  return await unsubscribe(email, message, { template, body });
};
