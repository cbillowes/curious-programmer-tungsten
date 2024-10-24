const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

initializeApp({
  credential: cert({
    privateKey:
      process.env.NODE_ENV === 'production'
        ? process.env.FIREBASE_SERVICE_ACCOUNT
        : require('../../keys/firebase.json'),
  }),
});

const db = getFirestore();

module.exports = {
  db,
};
