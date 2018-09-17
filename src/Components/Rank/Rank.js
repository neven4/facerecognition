import React from "react";

const Rank = ({ name, enters }) => {
  return (
    <div>
      <div className="white f3">{`${name}, your current entry count is...`}</div>
      <div className="white f1">{enters}</div>
    </div>
  );
};

export default Rank;
