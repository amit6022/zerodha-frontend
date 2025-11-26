import React from "react";

function Universe() {
  return (
    <div className="container text-center my-5">
      <h2 className="mt-5 p-3">The Zerodha Universe</h2>
      <p>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row p-5 m-5 evenly d-flex align-items-center">
        <div className="col-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            className=" logo-img img-fluid m-3"
          />
          <p className="text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img
            src="media/images/streakLogo.png"
            alt=""
            className=" logo-img img-fluid m-3"
          />
          <p className="text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/sensibullLogo.svg"
            alt=""
            className=" logo-img img-fluid m-3"
          />
          <p className="text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          <img
            src="media/images/smallcaseLogo.png"
            alt=""
            className=" logo-img img-fluid m-3"
          />
          <p className="text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/tijori.svg"
            alt=""
            className=" logo-img img-fluid m-3"
          />
          <p className="text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
          <img
            src="media/images/dittoLogo.png"
            alt=""
            className="logo-img img-fluid m-3 logo-img"
          />
          <p className="text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <button className="btn btn-primary">Sign up for free</button>
    </div>
  );
}

export default Universe;
