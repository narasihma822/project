import { useEffect, useState } from "react";
import { Link } from "react-router-dom";





function Addcart() {
    const [data, setData] = useState([])
    const [total, setTotal] = useState()
    useEffect(() => {
        fetch("https://ecommerce-app-api-mqow.onrender.com/addcart")
            .then((go) => {
                return go.json()
            })
            .then((resp) => {
                setData(resp)

                const total = resp.reduce((og, item) => og + parseFloat(item.price), 0)
                setTotal(total)
            })
    }, [])
    const Delete = (id) => {
        fetch("https://ecommerce-app-api-mqow.onrender.com/addcart/" + id, {
            method: "DELETE"
        })
            .then(() => {
                // alert("Removed successfully")
            })
        window.location.reload()

    }




    return (
        <div >
            <Link to="/app">
                <h1 style={{ textAlign: "center " }}>GO BACK TO HOME PAGE</h1>
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">img</th>
                        <th scope="col">size</th>
                        <th scope="col">price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">

                    {data.map((item) => (
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td><img src={item.img} alt="k" height="60px" width="50%" /></td>
                            <td>{item.size}</td>
                            <td>{item.price}</td>
                            <button className="btn btn-danger" onClick={() => { Delete(item.id) }}>Remove</button>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <h2 style={{ marginLeft: "1100px" }}>Total:{total}</h2>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
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
export default Addcart;