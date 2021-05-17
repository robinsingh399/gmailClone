import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyD9ApdiaQcyj_0hAcwIH-Zv2HxUfjTGuVU",
    authDomain: "clone-db54a.firebaseapp.com",
    projectId: "clone-db54a",
    storageBucket: "clone-db54a.appspot.com",
    messagingSenderId: "617793925342",
    appId: "1:617793925342:web:99a5d60dbc2b0dcec2524f",
    measurementId: "G-0NY424XCLM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};