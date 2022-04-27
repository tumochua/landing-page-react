import React from "react";
import "./Header.scss";
import iconhader from "../../assets/iconder.png";
function Header() {
  return (
    <>
      <div className="header-ctn">
        <div className="header-icon">
          <img alt="img" src={iconhader} className="header-icon" />
          <h2>Rubik</h2>
        </div>
        <div className="header-nav">
          <ul>
            <li>Features</li>
            <li>Protocol</li>
            <li>OurTeams</li>
            <li>Docs</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="header-btn">
          <button>Launch App</button>
        </div>
      </div>
    </>
  );
}

export default Header;
