// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore,collection, getDocs } from "firebase/firestore";
import { getDatabase } from "firebase/database"
// import database from 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2DGmAJTrODK48qSojvPM_prAPfvBS-Uc",
  authDomain: "fir-auth-6a87f.firebaseapp.com",
  projectId: "fir-auth-6a87f",
  storageBucket: "fir-auth-6a87f.appspot.com",
  messagingSenderId: "742822050138",
  appId: "1:742822050138:web:8545995fc89d5cb88b5b63"
};
// const app = initializeApp(firebaseConfig);

// export const auth =getAuth(app)
let app;
if(firebase.apps.length===0)
{
  app=firebase.initializeApp(firebaseConfig);
}else{
  app=firebase.app()
}
const auth=firebase.auth()
export { auth };
export const db=getFirestore(app);
// const colref=collection(db,'users')
// getDocs(colref)
// .then((snapshot)=>{
//   let u=[]
//   snapshot.docs.forEach((doc)=>{
//     u.push({...doc.data(),id:doc.id})
//   })
//   console.log(u)
// })

// firebase.database().ref().set({

// })



