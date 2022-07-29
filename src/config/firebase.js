import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {

    apiKey: "AIzaSyBOQTjAD5C_iahhKaXlJD6c6y6Wd2yHq0A",
    authDomain: "bdpharma-b2a71.firebaseapp.com",
    databaseURL: "https://bdpharma-b2a71.firebaseapp.com",
    projectId: "bdpharma-b2a71",
    storageBucket: "bdpharma-b2a71.appspot.com",
    messagingSenderId: "613409030695",
    appId: "1:613409030695:web:250706a787dff756cc0402" 
}

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}




