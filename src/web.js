

import { useState } from "react";

import { initializeApp } from "firebase/app";
 import {createUserWithEmailAndPassword,getAuth} from "firebase/auth"
import { Link,useNavigate } from "react-router-dom";




function One() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [psd, setPsd] = useState("")
    const [cpsd, setCpsd] = useState("")

    const navigate=useNavigate()



    const firebaseConfig = {
        apiKey: "AIzaSyBmbt0GWdLp3LfPsR0foJZMFQysZfJmkmo",
        authDomain: "narasimha-4cf38.firebaseapp.com",
        projectId: "narasimha-4cf38",
        storageBucket: "narasimha-4cf38.appspot.com",
        messagingSenderId: "931387859079",
        appId: "1:931387859079:web:f9e2c4cc056cbf78c51822",
        measurementId: "G-FP2FFCJCJL"
      };
      
      
        const app=initializeApp(firebaseConfig)
       const auth = getAuth()


    const submit=(event)=>{
        event.preventDefault()

        if(name.length <=5){
            alert("minimum 5 characters mandatory........!")

        }
        else if(psd != cpsd){
            alert("password does not match..........")
        }
        
        let obj={
            email:email,
            password:psd
        }
        createUserWithEmailAndPassword(auth,obj.email,obj.password)
        .then(()=>{
            alert("registration complted")
            navigate("/login")
        })
        .catch(()=>{
            alert("error")
        })

    }


   



    return (
        <div  className="container" style={{width:"400px", backgroundColor:"lightgray" , border:"2px solid black" ,borderRadius:"15px", }} >
            <div className="card my-5 p-4 " style={{backgroundColor:"lightgray"}}>
                <div className="card-title">
                    <h2 className="text-center">Sign Up</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={submit}>
                        <div class="mb-3">
                            <label class="form-label" style={{color:"blue"}}>Name</label>
                            <input value={name}  onChange={e=>setName(e.target.value)}  type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>

                        <div class="mb-3">
                            <label class="form-label" style={{color:"blue"}}>Email</label>
                            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label" style={{color:"blue"}}>Password</label>
                            <input value={psd} onChange={e=>setPsd(e.target.value)} type="password" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>

                        <div class="mb-3">
                            <label class="form-label" style={{color:"blue"}}> Conform Password</label>
                            <input value={cpsd} onChange={e=>setCpsd(e.target.value)} type="password" required class="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    
                    <div>
                        <a href="/">if you have already account
                        <Link to="/login">Login</Link>

                        </a>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default One;














<div>
    <form>
        <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

        </div>

        <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputPassword1" />
        </div>

        <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

        </div>

        <div class="mb-3">
            <label class="form-label"> Conform Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>