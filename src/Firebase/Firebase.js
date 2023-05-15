import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAexk-LD2FT8AUY5PODZiI61_VUs9bsnhc",
  authDomain: "scrybe-6d5e0.firebaseapp.com",
  projectId: "scrybe-6d5e0",
  storageBucket: "scrybe-6d5e0.appspot.com",
  messagingSenderId: "1049404588749",
  appId: "1:1049404588749:web:fc9d37943c80ce5c5b1f84",
  measurementId: "G-JVRZVNBFET",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export { auth }
