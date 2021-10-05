import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: 'AIzaSyDSK-lmQ1BYCygRB593ZLa6cmxTxyTyBTs',
  authDomain: 'sistema-cea39.firebaseapp.com',
  projectId: 'sistema-cea39',
  storageBucket: 'sistema-cea39.appspot.com',
  messagingSenderId: '425765880543',
  appId: '1:425765880543:web:e06920ceb0fda0f9405f6a',
  measurementId: 'G-6HJFP6BYQF',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
