import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="title" key="h1">
    Namaste React
  </h1>
);

const Title = () => (
  <h1 id="title" key="h1">
    Namaste React
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      {1 + 2}
      {heading}
      {Title()}
      <h2 id="title" key="h1">
        Namaste React header component
      </h2>
      <h2 id="title" key="h2">
        Namaste React header component2
      </h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
