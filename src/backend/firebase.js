const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

initializeApp({
  credential: cert({
    privateKey: process.env.FIREBASE_SERVICE_ACCOUNT,
  }),
});

const db = getFirestore();

module.exports = {
  db,
};
