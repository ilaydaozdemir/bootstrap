import React from "react";
import Cards from "../components/Cards";
import "./Home.css";
const Home = () => {
  return (
    <div className="container-fluid">
      <h3 className="text-center mt-5 text-uppercase">Shop Page</h3>
      <div className="container py-4">
        <div className="row">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Home;
