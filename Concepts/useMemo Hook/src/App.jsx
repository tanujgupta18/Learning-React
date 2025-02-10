import React, { useState } from "react";

const ExpensiveComponent = ({ num }) => {
  const compute = (n) => {
    console.log("Calculating...");
    return n * 2;
  };

  const doubledValue = compute(num); // Recomputes on every render!

  return <p>Computed Value: {doubledValue}</p>;
};

export default ExpensiveComponent;
