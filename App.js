import React from "react";
import ReactDOM from "react-dom/client";

// React component
const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

// JSX
const jsxHeading = (
<h1 className="head">Namaste React using JSX</h1>);

// Adding component to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);