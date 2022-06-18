import React from "react";
import styles from "../Styles/Earn.css";
import ReactPlayer from "react-player"

function Earn() {
  return (
    <div className="mainDiv-Earn">
      <div className="heading-Earn">
        <h1>Earn Money Online | Working Form Home</h1>
      </div>
      <div className="threeDiv-Earn">
        <div className="firstDiv-Earn">
          <h1>
            Upload Products that
            <br /> you have!
          </h1>

          <p>
            Create your Account by clicking here
            <br />
            Verify your account
            <br />
            Go to Dashboard
            <br />
            Pick any product. For example mobile phone, or any item.
            <br />
            Search for it in the Database.
            <br />
            If it's available, upload a photograph.
            <br />
            Please mention the price you bought it at.
          </p>
        </div>
        <div className="secondDiv-Earn">
          <h1>
            Provide a brief
            <br /> description of
            <br /> how to use!
          </h1>
          <p>
            Describe the product you just uploaded.
            <br />
            Mention from where you bought it, online or offline
            <br />A Video increases your chances of getting a product approved,
            but it is not mandatory to upload videos.
          </p>
        </div>
        <div className="thirdDiv-Earn">
          <h1>
            On Approval get
            <br /> scratch cards and earn
            <br /> money!
          </h1>
          <p>
            We will review the products you uploaded.
            <br />
            On approval you will get a scratch card, which can be money or
            coupon code.
            <br />
            Make sure you provide the correct bank details or UPI Id, to which
            you want the money to transfer
          </p>
        </div>
      </div>
      <div className="videoDiv-Earn">
        <ReactPlayer width="100%" height="100%" url="https://youtu.be/TfQyg-DSHBo" />
      </div>
      <button className="getStart-Earn">Get Start</button>
    </div>
  );
}

export default Earn;
