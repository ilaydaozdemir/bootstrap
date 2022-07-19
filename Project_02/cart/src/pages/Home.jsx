import React from "react";
import Data from "../backend/Data";

import Cards from "../components/Cards";
import "./Home.css";
import data from "../backend/Data";
const Home = () => {
  return (
    <div className="container-fluid">
      <h3 className="text-center mt-5 text-uppercase">Shop Page</h3>
      <div className="container py-4">
        <div className="row">
          {Data.products.map((item, index) => {
            return (
              <Cards
                img={item.img}
                title={item.title}
                desc={item.decs}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
