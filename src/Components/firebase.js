import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBXBF0_atWCkTr70xytz6y9v5uDzJ3PWmE",
    authDomain: "kfas-151c1.firebaseapp.com",
    projectId: "kfas-151c1",
    storageBucket: "kfas-151c1.appspot.com",
    messagingSenderId: "1042458604157",
    appId: "1:1042458604157:web:82527a18c4d35603dd7714",
    measurementId: "G-38EQ9GC6B4"
})


export default app
export const auth = app.auth()