const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const { client_email, project_id, private_key } = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT,
);

initializeApp({
  credential: cert({
    projectId: project_id,
    clientEmail: client_email,
    privateKey: private_key,
  }),
});

const db = getFirestore();

module.exports = {
  db,
};
