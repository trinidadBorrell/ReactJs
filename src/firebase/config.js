import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAzLJ-NLvZH9zz3uvY6gf3ZI8vfFhzWqFo",
    authDomain: "coderhouse-react-38216.firebaseapp.com",
    projectId: "coderhouse-react-38216",
    storageBucket: "coderhouse-react-38216.appspot.com",
    messagingSenderId: "445577693553",
    appId: "1:445577693553:web:a653491cbdc5cbb8690ed0"
  };

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app
}
        
export const getFirestore = () => {
    return firebase.firestore(app)
}