require('dotenv').config();
const { uuidv7 } = require('uuidv7');
const { db } = require('./firebase');
const { sendEmail } = require('./email');

module.exports.report = async (error) => {
  const id = uuidv7();
  console.error(id, error);
  await sendEmail(
    process.env.ADMIN_EMAIL,
    `Error: ${id} | ${error.message}`,
    error.stack,
    error.stack,
  );
  const errorRef = db.collection('errors').doc(id);
  await errorRef.set({
    message: error.message,
    error: error.stack,
    created: new Date(),
  });
  return id;
};
