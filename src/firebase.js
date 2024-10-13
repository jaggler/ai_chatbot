// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL-HSusQZJDEAt0kL0S4i2RawI0ovl5x0",
  authDomain: "ai-chatbot-34789.firebaseapp.com",
  projectId: "ai-chatbot-34789",
  storageBucket: "ai-chatbot-34789.appspot.com",
  messagingSenderId: "776755791808",
  appId: "1:776755791808:web:8ac825dffcaf3fa7c6aa25",
  measurementId: "G-N5EBY28PJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);