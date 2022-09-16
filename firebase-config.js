// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
  appId: "1:378171746638:web:260ef9a297bb6585c3d61f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);