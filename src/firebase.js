import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADFM7GtBr6VpDyM-KnWdy-6QZ6a4FfGlU",
  authDomain: "slack-app-60a27.firebaseapp.com",
  databaseURL: "https://slack-app-60a27.firebaseio.com",
  projectId: "slack-app-60a27",
  storageBucket: "slack-app-60a27.appspot.com",
  messagingSenderId: "354886438715",
  appId: "1:354886438715:web:4d4ec1657c497baeca311e",
  measurementId: "G-HNG71ETE7W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
