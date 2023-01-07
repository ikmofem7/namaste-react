import { createElement } from "react";

const ExampleWithCreateElement = () => {
  const h1 = createElement("h1", {}, "Heading1");
  const h2 = createElement("h2", {}, "Heading2");
  const h3 = createElement("h3", {}, "Heading3");
  return createElement("div", { className: "title" }, [h1, h2, h3]);
};

export default ExampleWithCreateElement;
