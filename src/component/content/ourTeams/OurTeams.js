import React from "react";
import "./OurTeams.scss";
import User from "../../../assets/ourTeams/user.png";
import SupperApp from "../../../assets/ourTeams/supper-app.png";
function OurTeams() {
  return (
    <>
      <div className="our-team">
        <div className="our-team-title">
          <h1>Our Teams behind Rubik</h1>
          <p>
            Our customers and partners vary from local start-ups to Fortune 1000
            MNCs all over the world
          </p>
        </div>
        <div className="our-teams-user">
          <div className="users">
            <img className="user-img" src={User} />
            <div className="user-des">
              <h3>MTP</h3>
              <div>Position</div>
              <div>
                Serial founder and crypto enthusiast developing our smart
                contracts and protocol.
              </div>
            </div>
          </div>
          <div className="users">
            <img className="user-img" src={User} />
            <div className="user-des">
              <h3>MTP</h3>
              <div>Position</div>
              <div>
                Serial founder and crypto enthusiast developing our smart
                contracts and protocol.
              </div>
            </div>
          </div>
          <div className="users">
            <img className="user-img" src={User} />
            <div className="user-des">
              <h3>MTP</h3>
              <div>Position</div>
              <div>
                Serial founder and crypto enthusiast developing our smart
                contracts and protocol.
              </div>
            </div>
          </div>
          <div className="users">
            <img className="user-img" src={User} />
            <div className="user-des">
              <h3>MTP</h3>
              <div>Position</div>
              <div>
                Serial founder and crypto enthusiast developing our smart
                contracts and protocol.
              </div>
            </div>
          </div>
          <div className="users">
            <img className="user-img" src={User} />
            <div className="user-des">
              <h3>MTP</h3>
              <div>Position</div>
              <div>
                Serial founder and crypto enthusiast developing our smart
                contracts and protocol.
              </div>
            </div>
          </div>
          <div className="users">
            <img className="user-img" src={User} />
            <div className="user-des">
              <h3>MTP</h3>
              <div>Position</div>
              <div>
                Serial founder and crypto enthusiast developing our smart
                contracts and protocol.
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={SupperApp} className="img-supper" />
    </>
  );
}
export default OurTeams;
