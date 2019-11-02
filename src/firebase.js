import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyC11-5NSJXvNRdBbQyEPYB89v6gtl8qWt4",
    authDomain: "m-city-72f2c.firebaseapp.com",
    databaseURL: "https://m-city-72f2c.firebaseio.com",
    projectId: "m-city-72f2c",
    storageBucket: "",
    messagingSenderId: "147234963601",
    appId: "1:147234963601:web:2bfc13b8748386ce55bf30"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches')

  export {
    firebase,
    firebaseMatches
  }