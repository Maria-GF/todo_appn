import { initializeApp } from 'firebase/app'
import settings from './settings'
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp(settings)

// export const auth = firebaseApp.auth()
export const db = getFirestore(firebaseApp); //firebaseApp.databagetse()
// export const PROVIDER = new firebase.auth.GoogleAuthProvider()

export default firebaseApp