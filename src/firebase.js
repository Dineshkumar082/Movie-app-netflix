import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBC_ojsl5QpMeo3zsrFHAN1GCzC2Sl1dbs",
    authDomain: "netflix-8e1fe.firebaseapp.com",
    projectId: "netflix-8e1fe",
    storageBucket: "netflix-8e1fe.appspot.com",
    messagingSenderId: "299860868413",
    appId: "1:299860868413:web:58cb5367dc26b4c6b91954"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth()
  const db = getFirestore()

  export {app, auth, db};