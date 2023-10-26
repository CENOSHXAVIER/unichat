import { initializeApp } from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC7BgNY3sQGObNyiR869QI_DdFJmuU1U9s",
  authDomain: "unichat-d6d5c.firebaseapp.com",
  projectId: "unichat-d6d5c",
  storageBucket: "unichat-d6d5c.appspot.com",
  messagingSenderId: "799173331489",
  appId: "1:799173331489:web:3687604ef7bbfb67cdb160",
  measurementId: "G-HGS3VBY22Q"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();

