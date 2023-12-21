import One from "./web"
import Login from "./login";
// import Main from "./main.js"
import EmpData1 from "./EmpData1";
import Addcart from "./addcart";


import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
function Run(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<One/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/app" element={<EmpData1/>}/>
                    <Route path="/addcart" element={<Addcart/>}/>
                  
                </Routes>
            </Router>
        </div>

    )
}
export default Run;