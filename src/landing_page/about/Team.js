import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 border-top">
        <h2 className="fs-4 text-center">People</h2>
      </div>
      <div
        className="row p-3  text-muted"
        style={{ lineHeight: "1.5", fontSize: "1.2em" }}
      >
        <div className="col-6 text-center d-flex flex-column justify-content-center align-items-center">
          <img src="media/images/amitsinghphoto.jpg" className="team-photo" />
          <h4 className="mt-5">Amit Singh</h4>
          <h6>Founder,</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a
              href="https://github.com/amit6022"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            / <a href="">TradingQnA</a> / <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
