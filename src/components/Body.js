import RestroCard from "./RestroCard";
import { RestaurantList } from "../config";
import { useState } from "react";


function filterData(SearchText,restaurantList){
  if(SearchText===""){
    return RestaurantList
  }
  else{
    return restaurantList.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(SearchText.toLowerCase())
  );
  }
}



const Body = () => {
  const [restaurantList, setRestaurantList] = useState(RestaurantList);
  const [SearchText, setSearchText] = useState("");
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          className="search"
          placeholder="Search for restaurants"
          value={SearchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search_btn" onClick={()=>{const data=filterData(SearchText,restaurantList)
        setRestaurantList(data)
        }}>Search:{SearchText}</button>
      </div>
      <div className="restaurantlist">
        {restaurantList.map((restaurant, index) => (
          <RestroCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
 