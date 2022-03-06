// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app"
import { getAuth,signInWithEmailAndPassword} from "firebase/auth";
import { getDatabase, ref, onValue, child, get} from "firebase/database";
import { addDoc, collection, Firestore, getDoc, getDocs, getFirestore, onSnapshot} from "firebase/firestore"; 
import { stringify } from "@firebase/util";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArXfJvYdcvpTje6Kpvjbe3p0TzLs7Nk4E",
  authDomain: "webcat-tech-test.firebaseapp.com",
  projectId: "webcat-tech-test",
  storageBucket: "webcat-tech-test.appspot.com",
  messagingSenderId: "131272287050",
  appId: "1:131272287050:web:1e86819ec375a2591457b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//---------------- STABLISH CONECTION --------------------------------------------------------------------------

// Initialize the auth module using Firebase.
const auth = getAuth(app);

// Building a function to log in with email and password using Auth module
// const loginUSer = async (email, pass) => { signInWithEmailAndPassword(auth,email, pass)};
// Initialize LogIn function to connect to the project
// loginUSer('i.alfonso@uniandes.edu.co', 'MurxMb5Kfxxtx`#~').then(response => console.log('logIn Exitoso', response))

 function loginToFirebase(callback)
{
    let email = 'i.alfonso@uniandes.edu.co';
    let password = 'MurxMb5Kfxxtx`#~';

    loginFirebaseUser(email, password, callback);
}

function loginFirebaseUser(email, password, callback)
{
    console.log('Logging in Firebase User');

    signInWithEmailAndPassword(auth, email, password)
        .then(function ()
        {
            if (callback)
            {
                callback();
            }
        })
        .catch(function(login_error)
        {
            let loginErrorCode = login_error.code;
            let loginErrorMessage = login_error.message;

            console.log(loginErrorCode);
            console.log(loginErrorMessage);

            if (loginErrorCode === 'auth/user-not-found')
            {
                createFirebaseUser(email, password, callback)
            }
        });
}

function createFirebaseUser(email, password, callback)
{
    console.log('Creating Firebase User');

    createUserWithEmailAndPassword(email, password)
        .then(function ()
        {
            if (callback)
            {
                callback();
            }
        })
        .catch(function(create_error)
        {
            let createErrorCode = create_error.code;
            let createErrorMessage = create_error.message;

            console.log(createErrorCode);
            console.log(createErrorMessage);
        });
}

loginToFirebase(loginFirebaseUser); // Loging in.

//--------------- GETTING THE DATA --------------------------------------------------------------------------

// Get a reference to the database service

let database = getDatabase(app);
let firestore = getFirestore(app);

// Build a documents to store the data
const userColection = collection(firestore, 'users')
async function addNewDocument () {
  const newDoc = addDoc (userColection, users.data())
}


// Listen the coming data

function listenToADoc(){
  onSnapshot (userColection, (docSnapshot) => {
    if (docSnapshot.exists()){
      const docData = docSnapshot.data
      console.log(`Data in real time: ${JASON.stringify(docData)}`)
    }
  } )
}


