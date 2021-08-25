import firebase from "firebase/app";
import "firebase/auth";

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

const app = firebase.initializeApp({
  apiKey: "AIzaSyCSApiSIxvWPRa88VRPmVlCxdqK5Uwodrg",
  authDomain: "project-1f55b.firebaseapp.com",
  projectId: "project-1f55b",
  storageBucket: "project-1f55b.appspot.com",
  messagingSenderId: 705987820536,
  appId: "1:705987820536:web:99e0ae18c962a9af05740d",
});

export const auth = app.auth();
export default app;
