import React from "react";

const Home = (props) => {
  const { seconds } = props;
  const formatted = String(seconds).padStart(6, "0");

  return (
    <div className="bg-dark text-white text-center vh-100 d-flex justify-content-center align-items-center">
      <div className="display-3 bg-secondary px-4 py-3 rounded shadow d-flex align-items-center">
        <div className="bg-dark text-white mx-1 px-3 py-2 rounded">
          <i className="far fa-clock"></i>
        </div>
        {formatted.split("").map((digit, index) => (
          <div
            key={index}
            className="bg-dark text-white mx-1 px-3 py-2 rounded"
          >
            {digit}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

