const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// Import the functions you need from the SDKs you need
// import {initializeApp} from "firebase/app";
const firebase = require("firebase-admin");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3TCU_BBu--Acq0ssKfJx0qI-gOy5f8Bc",
  authDomain: "chicha-dev-api.firebaseapp.com",
  databaseURL: "https://chicha-dev-api-default-rtdb.firebaseio.com",
  projectId: "chicha-dev-api",
  storageBucket: "chicha-dev-api.appspot.com",
  messagingSenderId: "378171746638",
  appId: "1:378171746638:web:260ef9a297bb6585c3d61f",
};
firebaseConfig.credential = firebase.credential.cert(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// crear funcion que obtiene los recursos de nuestra firebase database
exports.api = functions.https.onRequest((req, res) => {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if ( req.method === "GET" ) {
    const data = firebase.database().ref("/me"); // referencia a la BD
    data.on("value", (snapshot) => {
      console.log(snapshot.val());
      res.json(snapshot.val()); // El elemento resultante lo exponemos en un archivo json
    });
  }
});
