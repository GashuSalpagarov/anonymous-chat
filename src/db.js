import firebase from "firebase/compat/app";
import "firebase/compat/database";

const config = {
    apiKey: "AIzaSyAqFm6bQynRa_r5nGrCV78YF__bOo2z7Mk",
    authDomain: "anonymous-chat-7ae53.firebaseapp.com",
    projectId: "anonymous-chat-7ae53",
    storageBucket: "anonymous-chat-7ae53.appspot.com",
    messagingSenderId: "826280856786",
    appId: "1:826280856786:web:8e8e1ace1ca8b4bbff710b"
}
const db = firebase.initializeApp(config);

export default db;