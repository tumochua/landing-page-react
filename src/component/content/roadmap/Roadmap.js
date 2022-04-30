import React from "react";
import "./Roadmap.scss";

function Roadmap() {
  return (
    <>
      <div className="roadmap">
        <div className="roadmap-card">
          <div className="card1 card">
            <div>
              What’s the token use case? RIK gives you a voice in the Rubik
              Network, a global community dedicated to crowdfunding treasuries
              and using the money to fund world-changing projects
            </div>
            <p>Dubin Nguyen</p>
          </div>
          <div className="card2  card">
            <div>
              <div className="card-des">
                <h1>Crypto for good.</h1>
                <p>Buy Rubik Network. Join the Web3. Change the world.</p>
              </div>
              <div className="card-coin">
                <div>
                  <p>Rubik price</p>
                  <h3>0.1$</h3>
                </div>
                <div>
                  <p>Rubik price</p>
                  <h3>0.1$</h3>
                </div>
                <div>
                  <p>Rubik price</p>
                  <h3>0.1$</h3>
                </div>
                <div>
                  <p>Rubik price</p>
                  <h3>0.1$</h3>
                </div>
              </div>
            </div>
            <button>Buy Rubik Token</button>
          </div>
          <div className="card3 card">
            <div>
              <h1>What’s the token use case?</h1>
              RIK gives you a voice in the Rubik Network, a global community
              dedicated to crowdfunding treasuries and using the money to fund
              world-changing projects.
              <div>
                <a>Read full whitepaper</a>
              </div>
            </div>
          </div>
        </div>
        <div className="decentralization">
          <div className="des">
            <h1>The roadmap to decentralization</h1>
            <p>
              Our goal is to build a completely autonomous and democratic
              platform for people to collaborate and coordinate on making the
              world a better place.
            </p>
            <div className="bd"></div>
          </div>
          <div className="step">
            <div className="step-precious">
              <div>2022</div>
              <div>2022</div>
              <div>2022</div>
            </div>
            <div className="step-des">
              <div className="step1 stepcarrd">
                Manage Funds & NFT Multichain or Vesting Contract
              </div>
              <div className="step2 stepcarrd">Multichain Swap</div>
              <div className="step3 stepcarrd">Native Launchpad</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
