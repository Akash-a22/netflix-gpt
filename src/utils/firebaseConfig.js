// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUX68J6jsnkkRlJHfbxpbykKQhjzK_8O8",
  authDomain: "netflix-gpt-e2aca.firebaseapp.com",
  projectId: "netflix-gpt-e2aca",
  storageBucket: "netflix-gpt-e2aca.appspot.com",
  messagingSenderId: "215739365387",
  appId: "1:215739365387:web:4e8590a55cdfec01be2f0e",
  measurementId: "G-MSFTBNWS3G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
