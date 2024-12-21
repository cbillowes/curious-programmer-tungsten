require('dotenv').config();
const { uuidv7 } = require('uuidv7');
const { db } = require('../firebase');

module.exports.report = async (error) => {
  const id = uuidv7();
  console.error(id, error);
  const errorRef = db.collection('errors').doc(id);
  await errorRef.set({
    message: error.message,
    error: error.toString(),
    created: new Date(),
  });
  return id;
}
