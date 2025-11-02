import React, { useState, useMemo } from "react";

const ExpensiveComponent = ({ num }) => {
  const compute = (n) => {
    console.log("Calculating...");
    return n * 2;
  };

  // useMemo memoizes the computed value
  const doubledValue = useMemo(() => compute(num), [num]);

  return <p>Computed Value: {doubledValue}</p>;
};

export default ExpensiveComponent;
