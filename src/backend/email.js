const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');

const EMAIL_UNAME = process.env.EMAIL_UNAME;
const EMAIL_PWD = process.env.EMAIL_PWD;
const ABSOLUTE_FS_PATH_TO_NETLIFY_FUNCTIONS = process.env.ABSOLUTE_FS_PATH_TO_NETLIFY_FUNCTIONS;

const sendEmail = async (email, subject, text, html) => {
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
  email,
  subject,
  template,
  previewText,
  data,
) => {
  const htmlTemplate = fs.readFileSync(
    path.join(ABSOLUTE_FS_PATH_TO_NETLIFY_FUNCTIONS, './emails/_template.html'),
    'utf8',
  );
  const htmlBody = fs.readFileSync(
    path.join(ABSOLUTE_FS_PATH_TO_NETLIFY_FUNCTIONS, './emails/', template),
    'utf8',
  );
  const body = Mustache.render(htmlBody, data);
  const html = Mustache.render(htmlTemplate, {
    title: subject,
    preview: previewText,
    body,
  });
  const text = html.replace(/(<([^>]+)>)/gi, '');
  return await sendEmail(email, subject, text, html);
};
