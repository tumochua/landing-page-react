import React from "react";
import "./content.scss";
import iconGooglePlay from "../../assets/icon-google-play.png";
import appLayout from "../../assets/Frame-1000001920.png";
import icon from "../../assets/Frame 709.png";
import OnleWallet from "./OnleWallet/OnleWallet";
import Roadmap from "./roadmap/Roadmap";
import Protocol from "./protocol/Protocol";
import OurTeams from "./ourTeams/OurTeams";

function Content() {
  return (
    <>
      <div className="ctn">
        <div className="ctn-ctn">
          <div className="ctn-title">
            <div className="ctn-left">
              <div className="ctn-web3">The Portal to Web3</div>
              <p>All-in-One wallet improve everything in Web3 experience</p>
              <div className="ctn-bt">
                <button className="ctn-btn">
                  <img src={iconGooglePlay} />
                  <div>
                    <p>Get it on</p>
                    <p className="p">Google Play </p>
                  </div>
                </button>
                <button className="ctn-btn">
                  <img src={iconGooglePlay} />
                  <div>
                    <p>Get it on</p>
                    <p className="p">Google Play </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div>
            <img src={appLayout} />
          </div>
        </div>
        <div className="web3">
          <div className="web3-title">
            <h2>What the Web3 ?</h2>
            <p>
              Copy Web3 is the idea of incentivized decentralization of data,
              <br /> which rewards contributors and protects their privacy and
              <br /> data on the internet
            </p>
          </div>
          <div className="web3-modal">
            <div>
              <div className="web3-icon">
                <div className="icon1">
                  <img src={icon} />
                  <p>waves</p>
                </div>
                <div className="icon1">
                  <img src={icon} />
                  <p>waves</p>
                </div>
                <div className="icon1">
                  <img src={icon} />
                  <p>waves</p>
                </div>
                <div className="icon1">
                  <img src={icon} />
                  <p>waves</p>
                </div>
              </div>
              <div className="web3-icon">
                <div className="icon1">
                  <img src={icon} />
                  <p>waves</p>
                </div>
                <div className="icon1">
                  <img src={icon} />
                  <p>waves</p>
                </div>
                <div className="icon1">
                  <img src={icon} />
                  <p>waves</p>
                </div>
                <div className="icon1">
                  <img src={icon} />
                  <p>waves</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OnleWallet />
      <Roadmap />
      <Protocol />
      <OurTeams />
    </>
  );
}

export default Content;
