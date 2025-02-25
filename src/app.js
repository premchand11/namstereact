import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {IMG_URL} from "./config";

/*
    header
      -logo(title)
      -navbar
       -cart

    body=
      -search bar
      -restarunt list
        -restarunt card(many)
           -image
           -name
           -rating
           -cusine
    footer
      -links
       -copy right


   */

// const heading = (
//   <h1 id="title" key="h1">
//     Namaste React
//   </h1>
// );








// props= properties



const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
