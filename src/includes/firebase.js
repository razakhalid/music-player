import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCvEhYz9Bn52k04iJo7w_CZn7iWM2jwUZM",
  authDomain: "music-player-366ae.firebaseapp.com",
  projectId: "music-player-366ae",
  storageBucket: "music-player-366ae.appspot.com",
  appId: "1:912146749476:web:6d6402b73936799583a0b1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection
}
