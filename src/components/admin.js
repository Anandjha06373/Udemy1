import React from "react";
import "../login/Lg.css";
const admin=()=>{
    return (
        <div className="container-1" >  
        <div className="modal-dialog modal-dialog-centered">
        <div class="from-title text-center">
             <form className="App-1">
             <p className="title"><b> ADMIN  LOGIN</b> </p>
                <label>Email:</label>
                <input type="email" className="email" placeholder="Enter Email Id:"></input><br/>
                <label>Password</label>
                <input type="password" className="password" placeholder="Enter password"></input><br/>
                <button className="btn-1">LOGIN</button>
             </form>
             </div>
             </div>
        </div>
    );

}
export default admin;