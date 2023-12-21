import { useEffect, useState } from "react";

import { signOut, getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "./Pagination";
import UseAuth from "./user";

import "./Home.css"





function EmpData1(event) {
    const [data, setData] = useState([])
    const [value, setValue] = useState("")


    let currentUser = UseAuth()

    const navigate = useNavigate()
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

    const SubmitData = (event) => {

        event.preventDefault()

        signOut(auth)
            .then(() => {
                alert("log out succesfully")
                navigate("/login")
            })
            .catch(() => {
                alert("error")
            })
    }





    useEffect(() => {

        fetch("https://ecommerce-app-api-mqow.onrender.com/subscription")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                // console.log(resp)
                setData(resp)
            })
    }, [])



    const search = async (lkj) => {
        lkj.preventDefault()
        return await axios.get(`https://ecommerce-app-api-mqow.onrender.com/subscription?q=${value}`)
            .then((go) => {
                setData(go.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }
    const [sort, setSort] = useState()
    const sorting = async (lkj) => {
        let value = lkj.target.value
        setSort(value)
        return await axios.get(`https://ecommerce-app-api-mqow.onrender.com/subscription?_sort=${value}&_order=asc`)
            .then((go) => {
                setData(go.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const addcart = (id) => {
        fetch("https://ecommerce-app-api-mqow.onrender.com/subscription/" + id)
            .then((sun) => {
                return sun.json()
            })
            .then((resp) => {
                fetch("https://ecommerce-app-api-mqow.onrender.com/addcart", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(resp)
                })
                    .then(() => {
                        alert("add cart suuess")
                        window.location.reload()
                    })
            })
    }


    const Deatails = (deatails) => {
        fetch("https://ecommerce-app-api-mqow.onrender.com/subscription/" + deatails)
            .then((sun) => {
                return sun.json()
            })
            .then((resp) => {
                // console.log(resp)
                setData(resp)
            })
    }

    const [page, setPage] = useState(1)
    const [records, setRecord] = useState(8)

    let lr = page * records
    let fr = lr - records


    let myData = data.slice(fr, lr)

    const updatePage = (n) => {
        setPage(n)
    }
    const next = () => {
        setPage(page + 1)
    }
    const prev = () => {
        setPage(page - 1)
    }

    const [count, setCount] = useState(0)



    useEffect(() => {

        fetch("https://ecommerce-app-api-mqow.onrender.com/addcart/")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                // console.log(resp)
                setCount(resp)
                
            })
            // window.location.reload()
    }, [])



    // User.js
    // Pagination.js
    // addcart.js
    // login.js
    // main.ja
    // run.js---main
    // indexedDB.js


    return (


        <div>

            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark" id="po" >

                <div className="container-fluid">
                    <a className="navbar-brand"><img src="https://cdn.dribbble.com/users/2370732/screenshots/9920313/media/ec7d0a1483c259f24debe462685820fc.png" style={{ height: "50px", width: "50px" }} /></a>
                    <h2 style={{ color: "white", border: "2px solid wheat", borderRadius: "10px", padding: "5px" }}>USER:{currentUser?.email}</h2>
                    <a className="navbar-brand"><i class="fa-solid fa-house fa-beat-fade fa-lg"></i></a>
                    <Link to="/addcart">
                        <a className="navbar-brand"><i class="fa-solid fa-cart-shopping fa-bounce fa-lg"></i> {count.length}</a>
                    </Link>

                    <form className="d-flex" role="search" onSubmit={search}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={value} onChange={(s) => setValue(s.target.value)} />
                        <button className="btn btn-outline-success" type="submit">Search  </button> <i className="fa-brands fa-react"></i>

                    </form>

                    <button className="btn btn-outline-success" onClick={SubmitData} type="text">logout</button>
                </div>
            </nav>


            <h1 style={{ textAlign: "center" ,color:"darkgreen"}}>CLOTHES FOR MENS & WOMENS</h1>


            <div className="d-flex gap-5" id="king">


                <div className="p-2" style={{ width: "400px" }}>

                    <div className="card bg-info">
                        <select className="form-select form-select-lg mb-3" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                        </select>

                        <select className="form-select form-select-lg mb-3" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                        </select>

                        <select className="form-select form-select-lg mb-3" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                        </select>

                        <select className="form-select form-select-lg mb-3" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                        </select>

                        <select className="form-select form-select-lg mb-3" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                        </select>

                        <select className="form-select form-select-lg mb-3" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                        </select>
                    </div>
                    <br /><br />

                    <div className="p-2 card w-100 bg-info">
                        <select value={sort} onChange={sorting} className="form-select form-select-lg mb-3" aria-label="Default select example">
                            <option selected>-Default-</option>
                            <option selected>brand</option>
                            <option selected>price</option>
                            <option selected>size</option>
                        </select>
                    </div>

                </div>

                <div id="sun" >
                    {myData.map((item) => (
                        <div className="card" id="hover" style={{ width: "18rem", boxShadow: "gray 5px 5px 5px", }}>

                            <img src={item.img} class="card-img-top" alt="..." style={{ height: "200px", }} />

                            <div className="card-body">

                                <h5 className="card-title">{item.brand}</h5>
                                <p className="card-text">{item.size}</p>
                                <p>{item.description}</p>
                                <h3 >Rs: {item.price}</h3>
                                <a href="#" className="btn btn-primary" onClick={() => { addcart(item.id) }}>Add To Cart (+)</a>

                            </div>

                        </div>

                    ))}

                </div>
            </div> 
            <br />
            <p style={{ marginLeft: "41%" }}> <Pagination total={data.length} records={records} update={updatePage} next={next} prev={prev} /></p>
            <br />
            <div className="card-group" >
                <div className="card" style={{ backgroundColor: "lightgrey" }}>

                    <div className="card-body">
                        <h2 className="card-title">Pages</h2>
                        <p className="card-text"> About us</p>
                        <p className="card-text"> our experince</p>
                        <p className="card-text"> Skiin & hair</p>
                        <p className="card-text"> Shop</p>
                    </div>
                </div>
                <div className="card" style={{ backgroundColor: "lightgrey" }}>

                    <div className="card-body">
                        <h2 className="card-title">Legal and help</h2>
                        <p className="card-text">FAQs</p>
                        <p className="card-text">Terms of use</p>
                        <p className="card-text">Privacy policy</p>
                    </div>
                </div>
                <div className="card" style={{ backgroundColor: "lightgrey" }}>

                    <div className="card-body">
                        <h2 className="card-title">Contact us</h2>
                        <p className="card-text"><i class="fa-solid fa-location-dot  fa-lg" style={{ color: "#1f5125" }}></i>  Address</p>
                        <p className="card-text"><i class="fa-solid fa-phone  fa-lg" style={{ color: "#25511f" }}></i> Phone numbers</p>
                        <p className="card-text"><i class="fa-solid fa-envelope  fa-lg" style={{ color: "#20511f" }}></i>  Mail id</p>
                    </div>
                </div>

                <div className="card" style={{ backgroundColor: "lightgrey" }}>

                    <div className="card-body">
                        <h2 className="card-title">Social links</h2>
                        <br />
                        <div style={{ display: "flex", gap: "20px" }}>
                            <i class="fa-brands fa-facebook  fa-lg fa-xl" style={{ color: "#1e64dc" }}></i>
                            <i class="fa-brands fa-twitter  fa-lg fa-xl" style={{ color: " #1b69ee" }}></i>
                            <i class="fa-brands fa-linkedin  fa-lg fa-xl" style={{ color: "#1b69ee" }}></i>
                            <i class="fa-brands fa-youtube  fa-lg fa-xl" style={{ color: "#ea3110" }}></i>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default EmpData1;