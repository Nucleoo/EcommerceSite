// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA7YGFcDV8p0dsN-J-PNwiOt4gRSeXX2Mg",
  authDomain: "ecommerce-42a04.firebaseapp.com",
  projectId: "ecommerce-42a04",
  storageBucket: "ecommerce-42a04.appspot.com",
  messagingSenderId: "552357096707",
  appId: "1:552357096707:web:1f7e41496d86aa2423cd36",
  measurementId: "G-ESYX5LT102"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };