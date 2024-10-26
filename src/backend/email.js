const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
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
  email,
  subject,
  template,
  previewText,
  data,
) => {
  const htmlTemplatePath = path.resolve(__dirname, 'emails/_template.html');
  const htmlTemplate = fs.readFileSync(htmlTemplatePath, 'utf8');
  const htmlPath = path.resolve(__dirname, 'emails/', template);
  const htmlBody = fs.readFileSync(htmlPath, 'utf8');
  const body = Mustache.render(htmlBody, data);
  const html = Mustache.render(htmlTemplate, {
    title: subject,
    preview: previewText,
    body,
  });
  const text = html.replace(/(<([^>]+)>)/gi, '');
  return await sendEmail(email, subject, text, html);
};
