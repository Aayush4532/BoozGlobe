import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB6NIDzeAPxPTFEeJVEMrF0pGvmJOX8zIk",
  authDomain: "boozglobe.firebaseapp.com",
  projectId: "boozglobe",
  storageBucket: "boozglobe.firebasestorage.app",
  messagingSenderId: "568022633260",
  appId: "1:568022633260:web:bf1dd4af6885641dfeba89",
  measurementId: "G-X00K33RF4F"
};
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
export {auth};