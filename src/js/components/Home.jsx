import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
  const { seconds } = props;
  const formatted = String(seconds).padStart(6, "0");

  return (
    <div className="bg-dark text-white text-center vh-100 d-flex justify-content-center align-items-center">
      <div className="display-3 bg-secondary px-4 py-3 rounded shadow">
        {formatted.split("").map((digit, index) => (
          <span key={index} className="mx-1">
            {digit}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Home;