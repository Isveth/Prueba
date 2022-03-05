// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";

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

// Initialize the auth module using Firebase.
const auth = getAuth(app);

// Building a function to log in with email and password using Auth module
const loginUSer = async (email, pass) => {
  signInWithEmailAndPassword(auth,email, pass)
 .then((userCredential) => {
 console.log('Muy bien!!!. Bienvenido', userCredential.user); // succesful login message 
 })
 .catch((error) => {
 console.log('Contraseña no válida. Vuelve a intentarlo', error.message); // Failed loging message
 });
 };

 // Initialize LogIn function to connect to the project
 loginUSer('i.alfonso@uniandes.edu.co', 'MurxMb5Kfxxtx`#~').then(response => console.log('respuesta con funcion logIn', response))

 //console.log(auth.currentUser)
