import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCvEhYz9Bn52k04iJo7w_CZn7iWM2jwUZM",
  authDomain: "music-player-366ae.firebaseapp.com",
  projectId: "music-player-366ae",
  storageBucket: "music-player-366ae.appspot.com",
  // storageBucket: "gs://music-player-366ae.appspot.com",
  appId: "1:912146749476:web:6d6402b73936799583a0b1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  storage
}
