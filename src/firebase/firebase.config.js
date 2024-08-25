// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiSLmKm1kgoOVGAhaBicyZQvrtLlG-lZo",
  authDomain: "email-password-auth-38530.firebaseapp.com",
  projectId: "email-password-auth-38530",
  storageBucket: "email-password-auth-38530.appspot.com",
  messagingSenderId: "807861448143",
  appId: "1:807861448143:web:e2d14f85909c7c529df6ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;