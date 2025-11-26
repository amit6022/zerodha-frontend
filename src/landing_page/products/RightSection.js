import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row between v-align RightSection">
        {" "}
        <div className="col-5 mt-5">
          <h1 className="fs-4 text-muted mt-5">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              {learnMore}{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-7">
          <img src={imageURL} style={{ width: "100%" }} alt="imageURL" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
