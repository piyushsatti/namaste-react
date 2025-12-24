import React from "react";
import ReactDOM from "react-dom/client";

// React component
const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

// JSX
const jsxHeading = (
<h1 className="head">Namaste React using JSX</h1>);

const Title = () => {
  return (
    <h1>Namaste React Functional Component</h1>
  );
}

// React Functional Component
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h2>This is a nested component?</h2>
    </div>
  );
}

// Adding component to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);