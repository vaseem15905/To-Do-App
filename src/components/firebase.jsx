import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAf2CcNgsUDTpPOYpNPqg3CPraLdHAyNIE",
    authDomain: "todo-db672.firebaseapp.com",
    projectId: "todo-db672",
    storageBucket: "todo-db672.appspot.com",
    messagingSenderId: "101819614056",
    appId: "1:101819614056:web:fc84c275909a06e6a08cdd"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth() // for authentication
const provider = new GoogleAuthProvider() //for provider

const db = getFirestore(app)

export {auth , provider, db }

