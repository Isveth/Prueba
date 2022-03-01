// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArXfJvYdcvpTje6Kpvjbe3p0TzLs7Nk4E",
  authDomain: "webcat-tech-test.firebaseapp.com",
  projectId: "webcat-tech-test",
  storageBucket: "webcat-tech-test.appspot.com",
  messagingSenderId: "131272287050",
  appId: "1:131272287050:web:1e86819ec375a2591457b3"
	// You don't need the databaseId to connect to the Database
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

console.log(app)
