import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
const Title = () => <h1>Namaste React</h1>;
const HeaderComponent = () => <div>{Title()}</div>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
