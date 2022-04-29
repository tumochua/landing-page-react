import React from "react";
import "./OnleWallet.scss";
import Onewalet from "../../../assets/box1/Fire.png";
import icon1Box1 from "../../../assets/box1/icon1box1.png";
import icon2Box1 from "../../../assets/box1/icon2box1.png";
import icon3box1 from "../../../assets/box1/icon3box1.png";
import icon4box1 from "../../../assets/box1/icon4box1.png";
import icon5box1 from "../../../assets/box1/icon5box1.png";
import icon6box1 from "../../../assets/box1/icon6box1.png";
import icon7box1 from "../../../assets/box1/icon7box1.png";
import icon8box1 from "../../../assets/box1/icon8box1.png";

import iconTitle from "../../../assets/box2/icon2-title.png";
import icon1box2 from "../../../assets/box2/icon1box2.png";
import icon2box2 from "../../../assets/box2/icon2box2.png";
import icon3box2 from "../../../assets/box2/icon3box2.png";
import icon4box2 from "../../../assets/box2/icon4box2.png";

import iconTitlebox3 from "../../../assets/box3/icon-title.png";
import icon1Box3 from "../../../assets/box3/Icon1-box3.png";
import icon2Box3 from "../../../assets/box3/icon2-box3.png";

import iconTitleBox4 from "../../../assets/box4/icontitleBox4.png";

import iconTileBox5 from "../../../assets/box5/iconTitleBox5.png";
import icon1Box5 from "../../../assets/box5/icon1box5.png";
import icon2Box5 from "../../../assets/box5/icon2box5.png";
import icon3Box5 from "../../../assets/box5/icon3box5.png";
import icon4Box5 from "../../../assets/box5/icon4box5.png";
function OnleWallet() {
  return (
    <>
      <div className="container">
        <div>
          <h1>One Experience, One Wallet</h1>
        </div>
        <div className="ctn-icon">
          <div className="box1 box">
            <div className="content">
              <img src={Onewalet} />
              <div>
                <h2>Manage Funds & NFTs</h2>
                <p>Multi-chain supported and many more coming in the future.</p>
              </div>
            </div>
            <div className="onle-wallet-icon">
              <img src={icon1Box1} />
              <img src={icon2Box1} />
              <img src={icon3box1} />
              <img src={icon4box1} />
            </div>
            <div className="onle-wallet-icon">
              <img src={icon5box1} />
              <img src={icon6box1} />
              <img src={icon7box1} />
              <img src={icon8box1} />
            </div>
          </div>
          <div className="box2 box">
            <div className="content">
              <img src={iconTitle} />
              <div>
                <h2>Stablecoin Minting Protocol</h2>
                <p>
                  Combining existing lending platforms with cross-chain
                  liquidity protocol..
                </p>
              </div>
            </div>
            <div className="onle-wallet-icon">
              <img src={icon1box2} />
              <img src={icon2box2} />
              <img src={icon3box2} />
              <img src={icon4box2} />
            </div>
          </div>
          <div className="box3 box">
            <div className="content">
              <img src={iconTitlebox3} />
              <div>
                <h2>Protect Your Assets</h2>
                <p>
                  Layered encryption and authorization to maximize protection.
                </p>
              </div>
            </div>
            <div className="onle-wallet-icon">
              <img src={icon1Box3} />
              <img src={icon2Box3} />
            </div>
          </div>
          <div className="box4 box">
            <div className="content">
              <img src={iconTitleBox4} />
              <div>
                <h2>Manage Funds & NFTs</h2>
                <p>Multi-chain supported and many more coming in the future.</p>
              </div>
            </div>
            <div className="onle-wallet-icon">
              <img src={icon1box2} />
              <img src={icon2box2} />
              <img src={icon3box2} />
              <img src={icon4box2} />
            </div>
          </div>
          <div className="box5 box">
            <div className="content">
              <img src={iconTileBox5} />
              <div>
                <h2>Protect Your Assets</h2>
                <p>
                  Layered encryption and authorization to maximize protection.
                </p>
              </div>
            </div>
            <div className="onle-wallet-icon">
              <img src={icon1Box5} />
              <img src={icon2Box5} />
              <img src={icon3Box5} />
              <img src={icon4Box5} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnleWallet;
