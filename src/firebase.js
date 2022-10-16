import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7J8fludKNBNFYjJ-sJr8oDNphRG2vs9o",
  authDomain: "hotstar-62fdb.firebaseapp.com",
  projectId: "hotstar-62fdb",
  storageBucket: "hotstar-62fdb.appspot.com",
  messagingSenderId: "107002975944",
  appId: "1:107002975944:web:aaa91395a14abd6fbb77fd",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage().ref();
// console.log("Storage", storage);

export { auth, provider };
export default db;
