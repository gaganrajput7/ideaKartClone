import React from "react";
import styles from "../Styles/Contact.css";
export const Contact = () => {
  return (
    <div>
      <div id="mainDiv-contact">
        <div className="textDiv-contact">
          <p>You can contact our team by filling this form -</p>
        </div>
        <div className="input-box-contact">
          <div className="input-box-R-contact">
            <div className="firstName-div-contact">
              <h4>Firstname*</h4>
            </div>
            <input placeholder=" Please enter your firstname*"></input>
            <div className="Email-div-contact">
              <h4>Email*</h4>
            </div>
            <input placeholder="Please enter your Email*"></input>
          </div>
          <div className="input-box-L-contact">
          <div className="firstName-div-contact">
              <h4>Lastname*</h4>
            </div>
            <input placeholder="Please enter your lastname*"></input>
            <div className="Email-div-contact">
              <h4>Phone*</h4>
            </div>
            <input placeholder="Please enter your phone*"></input>
          </div>
          
        </div>
        <div className="msg-div-contact">
        <div className="firstName-div-contact">
              <h4>Message*</h4>
            </div>
            <input placeholder="Message for me*"></input>
            <button>Send message</button>
        </div>
      </div>
    </div>
  );
};