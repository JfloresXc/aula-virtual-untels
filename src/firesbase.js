import firebase from 'firebase/app'
import 'firebase/firebase-firestore'

const {FB_APIKEY, FB_APPID, FB_MESSAGINGSENDERID} = process.env

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: FB_APIKEY,
    authDomain: `aula-virtual-untels.firebaseapp.com`,
    projectId: "aula-virtual-untels",
    storageBucket: "aula-virtual-untels.appspot.com",
    messagingSenderId: FB_MESSAGINGSENDERID,
    appId: FB_APPID
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

const db = fb.firestore()
  
export {db} 