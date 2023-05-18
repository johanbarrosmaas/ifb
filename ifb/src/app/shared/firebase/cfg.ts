// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env['IFB_FIREBASE_APIKEY'],
  authDomain: process.env['IFB_FIREBASE_AUTH_DOMAIN'],
  projectId: process.env['IFB_FIREBASE_PRJ_ID'],
  storageBucket: process.env['IFB_FIREBASE_STORAGE'],
  messagingSenderId: process.env['IFB_FIREBASE_MS_ID'],
  appId: process.env['IFB_FIREBASE_APPID'],
  measurementId: process.env['IFB_FIREBASE_ANALYTICS_ID'],
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export default { app, analytics };