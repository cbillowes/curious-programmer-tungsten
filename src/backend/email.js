const nodemailer = require('nodemailer');
const Mustache = require('mustache');

const EMAIL_UNAME = process.env.EMAIL_UNAME;
const EMAIL_PWD = process.env.EMAIL_PWD;

const sendEmail = async (email, subject, text, html) => {
  console.log(`Sending ${subject}...`);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_UNAME,
      pass: EMAIL_PWD,
    },
  });

  const info = await transporter.sendMail({
    from: `"Clarice Bouwer 🦄" <${EMAIL_UNAME}>`,
    to: email,
    bcc: EMAIL_UNAME,
    subject: subject,
    text,
    html,
  });

  console.log('Message sent: %s', info.messageId);

  return info;
};

module.exports.sendEmailFromTemplate = async (
  config,
  email,
  subject,
  previewText,
  data,
) => {
  const { template, body } = config;
  const html = Mustache.render(template, {
    title: subject,
    preview: previewText,
    body: Mustache.render(body, data),
  });
  const text = html.replace(/(<([^>]+)>)/gi, '');
  return await sendEmail(email, subject, text, html);
};
