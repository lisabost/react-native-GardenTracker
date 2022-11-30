// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhX5GZrlOH0k5b6WGgI7Ce0qulyZg1cCg",
  authDomain: "react-firebase-73f45.firebaseapp.com",
  projectId: "react-firebase-73f45",
  storageBucket: "react-firebase-73f45.appspot.com",
  messagingSenderId: "598491006780",
  appId: "1:598491006780:web:b4f212b59202688d344039"
};

// Initialize Firebase
let app;

if(firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const auth = firebase.auth();

export { auth };
