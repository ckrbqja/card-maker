import firebase from "firebase"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.firebase.apiKey,
    authDomain: process.env.firebase.authDomain,
    databaseURL: process.env.firebase.databaseURL,
    projectId: process.env.firebase.projectId,
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
