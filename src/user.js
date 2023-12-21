
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBmbt0GWdLp3LfPsR0foJZMFQysZfJmkmo",
    authDomain: "narasimha-4cf38.firebaseapp.com",
    projectId: "narasimha-4cf38",
    storageBucket: "narasimha-4cf38.appspot.com",
    messagingSenderId: "931387859079",
    appId: "1:931387859079:web:f9e2c4cc056cbf78c51822",
    measurementId: "G-FP2FFCJCJL"
};
const app = initializeApp(firebaseConfig)
const auth = getAuth()




function UseAuth(){
    const[user,setUser]=useState()
    useEffect(()=>{
      let s=onAuthStateChanged(auth,user=>setUser(user))
      return s
    },[])
    return user
}
export default UseAuth;