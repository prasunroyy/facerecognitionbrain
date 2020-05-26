import React from "react";
//import "./Rank.css";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3">{`${name}, your entry count is..."`}</div>
      <div className="white f4">{entries}</div>
    </div>
  );
};

export default Rank;
