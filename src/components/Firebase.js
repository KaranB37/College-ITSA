// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyD_0z1fI5FrdKnvhZb3FxTKapnC4eJosuo",
  authDomain: "itsa-c1e7f.firebaseapp.com",
  projectId: "itsa-c1e7f",
  storageBucket: "itsa-c1e7f.appspot.com",
  messagingSenderId: "612915688615",
  appId: "1:612915688615:web:6c05bc3b72919c1d4ad782",
  measurementId: "G-W0JQZ4PJHZ"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app); // Get the auth object from the app
export { auth }; // Export the auth object
