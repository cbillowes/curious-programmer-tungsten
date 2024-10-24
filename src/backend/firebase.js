const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount =
  process.env.NODE_ENV === 'production'
    ? process.env.FIREBASE_SERVICE_ACCOUNT
    : require('../../keys/firebase.json');

console.log("NODE_ENV: ", process.env.NODE_ENV);

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

module.exports = {
  db,
};
