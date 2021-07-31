import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


let firebaseConfig = {
    apiKey: "AIzaSyDvm4hBOvXR4HMfMVCo30m4S8-jkit_Y0Y",
    authDomain: "sistema-9e488.firebaseapp.com",
    projectId: "sistema-9e488",
    storageBucket: "sistema-9e488.appspot.com",
    messagingSenderId: "60381811723",
    appId: "1:60381811723:web:166568ca5d7122c966630e",
    measurementId: "G-YPG52VELRB"
  };

  if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
 