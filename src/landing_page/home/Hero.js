import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h2 className="mt-4 fs-2">Invest in everything</h2>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="mt-4 mb-5 p-2 btn btn-primary fs-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
