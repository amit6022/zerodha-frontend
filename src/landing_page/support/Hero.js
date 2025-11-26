import React from "react";

function Support() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h5>Support Portal</h5>
        <a href="#">Track Ticket</a>
      </div>
      <div className="row p-5 ms-5">
        <div className="col-6 p-5">
          <h1 className="fs-4 pb-3">
            Search for an answer and browse help topics to create a ticket
          </h1>
          <input
            className="fs-5"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected .. "
          />{" "}
          <br />
          <div className="pt-3">
            <a href="" className="me-2">
              Track account opening
            </a>
            <a href="" className="me-2">
              Track segment activation
            </a>
            <a href="" className="me-2">
              Intraday margins
            </a>
            <br />
            <a href="" className="me-2">
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-6 p-3 mt-3 mb-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li className="pb-3">
              {" "}
              <a href="">
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </a>
            </li>
            <li>
              {" "}
              <a href="">
                Revision in expiry day of Index and Stock derivatives contracts
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Support;
