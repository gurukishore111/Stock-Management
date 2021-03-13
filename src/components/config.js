import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
   //Your Firebase config
});

const db = firebaseapp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
