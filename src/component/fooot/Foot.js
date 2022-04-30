import React from "react";
import "./Foot.scss";
import iconHeader from "../../assets/iconder.png";
import logoSocial from "../../assets/foot/icon1.png";
import logoFacebook from "../../assets/foot/icon2.png";
import logoTelegram from "../../assets/foot/icon3.png";
import logoGit from "../../assets/foot/icon4.png";

function Foot() {
  return (
    <>
      <div className="foot">
        <div className="ft">
          <div className="foot-left">
            <div className="">
              <div className="logo-foot">
                <img alt="img" src={iconHeader} className="header-icon" />
                <h2>Rubik</h2>
              </div>
              <p>
                Other crypto exchange charge up to 4% just to buy and sell
                crypto. We charge 0%
              </p>
            </div>
          </div>
          <div className="foot-right">
            <div className="foot-right-card">
              <h3>Resources</h3>
              <p>Documentation</p>
              <p>FAQs</p>
              <p>Blog</p>
            </div>
            <div className="foot-right-card">
              <h3>Resources</h3>
              <p>Documentation</p>
              <p>FAQs</p>
              <p>Blog</p>
            </div>
            <div className="foot-right-card">
              <h3>Resources</h3>
              <p>Documentation</p>
              <p>FAQs</p>
              <p>Blog</p>
            </div>
          </div>
        </div>
        <div className="btn-fooot">
          <button className="btnfollow">Follow community us</button>
          <div className="logo">
            <img src={logoSocial} />
            <img src={logoFacebook} />
            <img src={logoTelegram} />
            <img src={logoGit} />
          </div>
        </div>
        <div className="introduce">
          <div className="border-foot"></div>
          <div className="end">© Rubik. All rights reserved.</div>
        </div>
      </div>
    </>
  );
}

export default Foot;
