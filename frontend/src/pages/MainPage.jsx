import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white text-center">
      <div style={{ maxWidth: "400px" }}>
        <Lottie animationData={animationData} loop={true} />
      </div>
      <h2 className="nt-4"> It looks like you are not signed in</h2>
      <p> Please login to access the hotel management system</p>
      <Link to="/login">
        <button className="btn btn-primary mt-3 px-4 py-2"> Login </button>
      </Link>
    </div>
  );
}

export default MainPage;
