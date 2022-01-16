import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAL-oJAolT1uOWgMPkippzV3z68D1ZRMD8",
  authDomain: "money-experiment-6aac5.firebaseapp.com",
  projectId: "money-experiment-6aac5",
  storageBucket: "money-experiment-6aac5.appspot.com",
  messagingSenderId: "1045279180074",
  appId: "1:1045279180074:web:cf75b09adf351c20f1ca53",
  measurementId: "G-8803W4HQ8P",
};

export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
