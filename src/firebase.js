import { getAuth, onAuthStateChanged} from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAUjdRtv8b49MIq3Hp25ydCbVDTOrgdgwA",
    authDomain: "linkedin-clone-f8c91.firebaseapp.com",
    projectId: "linkedin-clone-f8c91",
    storageBucket: "linkedin-clone-f8c91.appspot.com",
    messagingSenderId: "518201805747",
    appId: "1:518201805747:web:8294b02d64569434ee59c6",
    measurementId: "G-TJYEFBNZ0H"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app);
  const auth = getAuth()

  export {db, auth};