import React from "react";
import "../login/Lg.css"
const Lg = () => {
    return (
        
        <div className="container-1" >  
        <div className="modal-dialog modal-dialog-centered">
        <div class="from-title text-center">
             <form className="app">
             <div className="App">
             <p className="title"><b>USER LOGIN</b></p>
                <label className="label"><span>Email:</span></label>
                <input type="email" className="email" placeholder="Enter Email Id:"></input><br/>
                <label className="label"><span>Password</span></label>
                <input type="password" className="password" placeholder="Enter password"></input><br/>
               <button className="btn-1">LOGIN</button>
               <div className="modal-footer d-flex justify-content-center">
                    <div class="signup-section">Not a member yet?<a href="/Signup" className="text-info"> Sign Up</a></div>
               </div>
               </div>
             </form>
             </div>
        </div>
        </div>
    );
  };
    
  export default Lg;