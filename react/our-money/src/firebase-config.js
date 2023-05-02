import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA74hDyUtZbbdYQ5buFOrqRi9Kxj0FaBfo",
  authDomain: "our-money-32684.firebaseapp.com",
  projectId: "our-money-32684",
  storageBucket: "our-money-32684.appspot.com",
  messagingSenderId: "886274560144",
  appId: "1:886274560144:web:43eb320c5ad9a724dc8815"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);

export {fireDb, app};