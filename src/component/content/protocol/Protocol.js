import React from "react";
import "./Protocol.scss";
import ProtocolImg from "../../../assets/Protocol.png";
function Protocol() {
  return (
    <>
      <div className="protocol">
        <h1 className="pro-title">Stablecoin Minting Protocol</h1>
        <img src={ProtocolImg} className="pro-img" />
        <p className="pro-des">
          We've done it carefully and simply. Combined with the ingredients
          makes for beautiful landings. It is definitely the tool you need to
          speed up your design process.
        </p>
      </div>
    </>
  );
}

export default Protocol;
