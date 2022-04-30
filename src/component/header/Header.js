import React from "react";
import "./Header.scss";
import iconhader from "../../assets/iconder.png";
import { useState, useEffect } from "react";
import Nav from "../../assets/nav.png";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      <div className="header-ctn">
        <div className="header-icon">
          <img alt="img" src={iconhader} className="header-icon" />
          <h2>Rubik</h2>
        </div>
        {(toggleMenu || screenWidth > 739) && (
          <div className="navbar">
            <ul className="nav-icon">
              <li>Features</li>
              <li>Protocol</li>
              <li>OurTeams</li>
              <li>Docs</li>
              <li>FAQ</li>
              <li className="header-btn">
                <button>Launch App</button>
              </li>
            </ul>
          </div>
        )}
        <button className="btn-respsi" onClick={toggleNav}>
          <img src={Nav} />
        </button>
      </div>
    </>
  );
}

export default Header;
