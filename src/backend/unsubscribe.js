const { sendEmail } = require('./email');

const SENDER_TOKEN = process.env.SENDER_TOKEN;
const NEWSLETTER_GROUP_ID = 'avDxqL';

module.exports.unsubscribe = async (email) => {
  const url = new URL(
    `https://api.sender.net/v2/subscribers/groups/${NEWSLETTER_GROUP_ID}`,
  );

  let headers = {
    Authorization: `Bearer ${SENDER_TOKEN}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  let data = {
    subscribers: [email],
  };

  const response = await fetch(url, {
    method: 'DELETE',
    headers,
    body: JSON.stringify(data),
  });

  await sendEmail(
    email,
    'Unsubscribed from the newsletter',
    'You have been unsubscribed from the newsletter.',
    '<p>You have been unsubscribed from the newsletter.</p>',
  );

  return response.json();
};
