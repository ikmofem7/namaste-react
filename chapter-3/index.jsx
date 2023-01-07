import React from "react";
import ExampleWithCreateElement from "./ExampleWithCreateElement";
import ExampleWithJsx from "./ExampleWithJsx";
import Header from "./Header";

const Example = (
  <div className="title">
    <h1>Heading1</h1>
    <h2>Heading2</h2>
    <h3>Heading3</h3>
  </div>
);

const Chapter3 = () => {
  return (
    <div>
      <Header />
      <ExampleWithCreateElement />
      <ExampleWithJsx />
      {Example}
    </div>
  );
};

export default Chapter3;
