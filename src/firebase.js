import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVwMLEyyZpYquTR9TS5Neg_Nr4nF6EAhI",
  authDomain: "facebook-clone-b50b3.firebaseapp.com",
  projectId: "facebook-clone-b50b3",
  storageBucket: "facebook-clone-b50b3.appspot.com",
  messagingSenderId: "919873240296",
  appId: "1:919873240296:web:b63dab1e3270d6851f9d5d",
  measurementId: "G-N3NTMKPQW2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;