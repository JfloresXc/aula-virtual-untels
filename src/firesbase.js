import firebase from 'firebase/app'
import 'firebase/firebase-firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDThWMMi11LQoJQNq0p-aDVNAzTRycJ8Og",
    authDomain: "aula-virtual-untels.firebaseapp.com",
    projectId: "aula-virtual-untels",
    storageBucket: "aula-virtual-untels.appspot.com",
    messagingSenderId: "896676091790",
    appId: "1:896676091790:web:0b8ccd6ce5d70b826736df"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

const db = fb.firestore()
  
export {db} 