
import * as firebase from "firebase";



const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyCW3eaeGQ4PCgVm8-vuzXmLaBP-SImssIA",
  authDomain: "todoreact-ace64.firebaseapp.com",
  databaseURL: "https://todoreact-ace64.firebaseio.com",
  projectId: "todoreact-ace64",
  storageBucket: "todoreact-ace64.appspot.com",
  messagingSenderId: "152722392654",
  appId: "1:152722392654:web:b3cfca1ee87b36028f251f",
  measurementId: "G-B2H5KWW9JY"
}) ;

const db=firebaseApp.firestore();
  
export default db;