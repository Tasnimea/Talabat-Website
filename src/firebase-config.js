import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";
import { getFirestore } from 'firebase/firestore'

import { getAuth } from "firebase/auth";


const firebaseConfig = {
  
  // apiKey: "AIzaSyAm0ZztPHEqCLlgpBrQawo3AYJ8cVy1C-c",
  // authDomain: "talabat-8e833.firebaseapp.com",
  // projectId: "talabat-8e833",
  // storageBucket: "talabat-8e833.appspot.com",
  // messagingSenderId: "147254476240",
  // appId: "1:147254476240:web:9c552007c798308254cdd5",
  // measurementId: "G-1W8ZB7DZ38"

  apiKey: "AIzaSyAm0ZztPHEqCLlgpBrQawo3AYJ8cVy1C-c",
  authDomain: "talabat-8e833.firebaseapp.com",
  projectId: "talabat-8e833",
  storageBucket: "talabat-8e833.appspot.com",
  messagingSenderId: "147254476240",
  appId: "1:147254476240:web:9c552007c798308254cdd5",
  measurementId: "G-1W8ZB7DZ38"


};






const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);




//  Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from '@firebase/firestore'; //??? from path صح ولا لا 



// const firebaseConfig = {
//     apiKey: "AIzaSyDYNnPG8SkpsEUqyy4KeF7sRZRmsMhh8us",
//     authDomain: "test-b7a4a.firebaseapp.com",
//     projectId: "test-b7a4a",
//     storageBucket: "test-b7a4a.appspot.com",
//     messagingSenderId: "878894272246",
//     appId: "1:878894272246:web:c913e17a8987eabd7026d7",
//     measurementId: "G-4R6CP09DQQ"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export  const db=getFirestore(app)