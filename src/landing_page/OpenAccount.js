import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h2 className="mt-4 fs-2">Open a Zerodha account</h2>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
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

export default OpenAccount;
