import React from "react";
import "../App.css";

export const Home = () => {
  return (
    <>
      <div className="home">Home</div>
      <div className="home-bottom">
        <div className="home-signup">
          <a href="/Signup">Signup</a>
        </div>
        <div className="home-login">
          <a href="/Login">Login</a>
        </div>
      </div>
    </>
  );
};
