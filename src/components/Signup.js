import React from "react";
import "../login/Lg.css"
const Signup=()=>{
    return(
        <div className="container-1" >  
        <div className="modal-dialog modal-dialog-centered">
        <div class="from-title text-center">
             <form className="app">
             <div className="App">
             <p className="title"><b>SIGN UP</b></p>
                <label className="label"><span>EMAIL:</span></label>
                <input type="email" className="email" placeholder="Enter Email Id:"></input><br/>
                <label className="label"><span>Password</span></label>
                <input type="password" className="password" placeholder="Enter password"></input><br/>
                <label for="psw-repeat" className="password-1" ><span>Repeat Password</span></label>
                <input type="password" className="ps" placeholder="Repeat Password" name="psw-repeat" required></input>
               <button className="btn-1">SIGN </button>
               </div>
             </form>
             </div>
        </div>
        </div>
    );
};
export default Signup;