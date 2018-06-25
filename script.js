// Deberás solicitar de forma manual Firebase y Cloud Firestore:

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

//Inicializamos una instancia de Cloud Firestore
firebase.initializeApp({
    apiKey: '### FIREBASE API KEY ###',
    authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: '### CLOUD FIRESTORE PROJECT ID ###'
  });
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();