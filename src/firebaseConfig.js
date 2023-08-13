// firebaseConfig.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoFRR6VsHtq2ERTFgR6UWV_kEqO7Dve5Y",
  authDomain: "howandwhere-d723b.firebaseapp.com",
  projectId: "howandwhere-d723b",
  storageBucket: "howandwhere-d723b.appspot.com",
  messagingSenderId: "297199534933",
  appId: "1:297199534933:web:80a23b2313697ead1f25dc",
  measurementId: "G-1GJ2Q80TZN"
};

firebase.initializeApp(firebaseConfig);

// export default firebaseConfig;
// export const auth = firebase.auth();
export const db = firebase.firestore();
// export const storage = firebase.storage();
