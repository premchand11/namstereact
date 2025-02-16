import React from "react";
import ReactDOM from "react-dom/client";

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

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

const HeaderComponent = () => {
  return (
    <div className="Header">
      <Title />
      <div className="Nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};



const RestaurantList = [
  {
    name: "Burger king",
    image:
      "https://b.zmtcdn.com/data/pictures/9/21156189/3e6910ce71ddf9dd0233bf0f9d6ad9a3.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cuisines: ["burgers", "american"],
    rating: "4.2",
  },
  {
    name: "Burger  kfrhhe king",
    image:
      "https://b.zmtcdn.com/data/pictures/9/21156189/3e6910ce71ddf9dd0233bf0f9d6ad9a3.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cuisines: ["burgers", "american"],
    rating: "4.2",
  },
  {
    name: "BKbjhhgfc",
    image:
      "https://b.zmtcdn.com/data/pictures/9/21156189/3e6910ce71ddf9dd0233bf0f9d6ad9a3.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cuisines: ["burgers", "american"],
    rating: "4.2",
  },
  {
    name: "BKiuhufc",
    image:
      "https://b.zmtcdn.com/data/pictures/9/21156189/3e6910ce71ddf9dd0233bf0f9d6ad9a3.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cuisines: ["burgers", "american"],
    rating: "4.2",
  },
  {
    name: "BKhoiifc",
    image:
      "https://b.zmtcdn.com/data/pictures/9/21156189/3e6910ce71ddf9dd0233bf0f9d6ad9a3.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cuisines: ["burgers", "american"],
    rating: "4.2",
  },
  {
    name: "BhjKfc",
    image:
      "https://b.zmtcdn.com/data/pictures/9/21156189/3e6910ce71ddf9dd0233bf0f9d6ad9a3.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cuisines: ["burgers", "american"],
    rating: "4.2",
  },
];

const RestroCard = (props) => {
  return (
    <div className="card">
      <img src={props.restaurant.image}></img>
      <h2>{props.restaurant.name}</h2>
      <h3>{props.restaurant.cuisines.join(",")}</h3>
      <h4>{props.restaurant.rating} stars</h4>
    </div>
  );
};
// props= properties
const Body = () => {
  return (
    <div className="restaurantlist">
      {RestaurantList.map((restaurant, index) => (
        <RestroCard key={index} restaurant={restaurant} />
      ))}
    </div>
  );
};

const Footer = () => {
  return <h4>footer </h4>;
};

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
