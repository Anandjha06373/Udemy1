import React from "react";
import {AiFillCreditCard} from "react-icons/ai";
import {FaCcVisa,FaAmazonPay} from "react-icons/fa";

import "./Payment.css";
const Payment=()=>{
      return(
        <div className="container-1">
        <div className="modal-dialog modal-dialog-centered">
        <div class="from-title text-center">
        <form className="App-5">
            <label className="Accept"><b>Card Accept</b></label>
            
            <AiFillCreditCard color="green" size="30px" />
            <FaCcVisa color="yellow" size="30px"/>
            <br/>
             <label className="cname"><b>Name on Card :</b> </label>
            <input type="text" id="cname" className="txt" placeholder="John More Doe"></input><br/><br/>
            <label className="ccnum"><b>Credit card number:</b></label>
            <input type="text" id="ccnum" className="txt" placeholder="1111-2222-3333-4444"></input> <br/><br/>
            <label className="expmonth"><b>Exp Month:</b> </label>
            <input type="text" id="expmonth" className="txt" placeholder="September"></input> <br/><br/>
            <div class="row">
              <div class="col-50">
                <label className="expyear"><b>Exp Year:</b> </label>
                <input type="text" id="expyear" className="txt" placeholder="2025"></input><br/><br/>
              </div>
              <div class="col-50">
                <label className="cvv"><b>CVV:</b> </label>
                <input type="text" id="cvv" className="txt" placeholder="352"></input><br/><br/>
              </div>
              <FaAmazonPay size=" 150px" color="green"/>
            </div>
           
        </form>
        </div>
        </div>
        </div>
      );
};
export default Payment;