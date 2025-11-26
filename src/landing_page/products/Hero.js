import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mt-2 pt-5 d-flex flex-column justify-content-center align-items-center">
      <h1 className="fs-3">Zerodha Products</h1>
      <h3 className="fs-5 text-body-secondary">
        Sleek, modern, and intuitive trading platforms
      </h3>
      <p className="p-3 mb-5">
        Check out our{" "}
        <a href="" style={{ textDecoration: "none" }}>
          investment offerings{" "}
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </p>
    </div>
  );
}

export default Hero;
