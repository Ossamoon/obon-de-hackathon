import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");

const config = {
  apiKey: "AIzaSyBcuYyVJBL20J37uGzM8cSyh-MS-PvMUTA",
  authDomain: "obon-de-hackathon.firebaseapp.com",
  projectId: "obon-de-hackathon",
  storageBucket: "obon-de-hackathon.appspot.com",
  messagingSenderId: "1020397180945",
  appId: "1:1020397180945:web:81cd724aae0f6bad4eb9b0",
  measurementId: "G-4SWT63R2EG",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
