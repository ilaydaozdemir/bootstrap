import React from "react";

import "./Cards.css";

const Cards = () => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4">
        <div className="card h-100 shadow">
          <img src="" alt="" className="card-img-top img-fluid" />
          <div className="card-body">
            <h5 className="card-title">Lorem, ipsum dolor.</h5>
            <p className="card-text">Lorem ipsum dolor sit amet.</p>
            <button className="btn btn-success">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
