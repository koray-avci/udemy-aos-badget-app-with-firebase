
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAVCmQRJuOL2PbX0bilzs6sUp1OUSDhHmQ",
  authDomain: "redux-toolkit-ve-modern-47e61.firebaseapp.com",
  projectId: "redux-toolkit-ve-modern-47e61",
  storageBucket: "redux-toolkit-ve-modern-47e61.appspot.com",
  messagingSenderId: "1061650059474",
  appId: "1:1061650059474:web:a7fda259860eec6d3edd0b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {
    auth,
    db
}