import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCABXDmUd7blmmBaMq3At8WNnYn8mnNlZw",
    authDomain: "addplus-40610.firebaseapp.com",
    projectId: "addplus-40610",
    storageBucket: "addplus-40610.appspot.com",
    messagingSenderId: "1059173956536",
    appId: "1:1059173956536:web:067847b83386953d07ed4d"
};

firebase.initializeApp(firebaseConfig)

export default firebase;