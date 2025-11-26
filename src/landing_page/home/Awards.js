import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="largestBroker" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h2 className="fs-2">Largest Stock broker in India</h2>
          <p>
            the largest online stock market education book in the world covering
            everything from the basics to advanced trading:
          </p>
          <div className="row mt-5">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and </p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media/images/pressLogos.png"
            style={{ width: "90%" }}
            alt="pressLogos"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
