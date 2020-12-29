import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDm0LDVZDSnGHO1nlgvW6WS6wQvZIqH3QY",
  authDomain: "linkedin-clone-3618a.firebaseapp.com",
  projectId: "linkedin-clone-3618a",
  storageBucket: "linkedin-clone-3618a.appspot.com",
  messagingSenderId: "524392457224",
  appId: "1:524392457224:web:66abe95b4f740cb25f9dbd"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const auth= firebase.auth();

export {db, auth };
