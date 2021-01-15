import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyBogx1YkPlMQAYTfQZhhxNAb7ze4qN06zw",
    authDomain: "vitorindo-e72e3.firebaseapp.com",
    projectId: "vitorindo-e72e3",
    storageBucket: "vitorindo-e72e3.appspot.com",
    messagingSenderId: "622853126967",
    appId: "1:622853126967:web:466f500d356fbcfea538b2",
    measurementId: "G-4PDBJBNGCD"
  };
  if(!firebase.apps.length){
    /// Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;