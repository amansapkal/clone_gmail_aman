 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 
 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFbdABLXsouYz7OVWxOsRVsIi1LfsRutU",
    authDomain: "clone-aman-f558c.firebaseapp.com",
    projectId: "clone-aman-f558c",
    storageBucket: "clone-aman-f558c.appspot.com",
    messagingSenderId: "933966756744",
    appId: "1:933966756744:web:b2e507021d772ef2c7d83d",
    measurementId: "G-RGRKNS8SVS"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);  //this initalize app and connect firebase to our webapp here
  const db = firebase.firestore(firebaseApp);//getting access of cloud firestore
  
  
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

 export { db ,auth ,provider};
