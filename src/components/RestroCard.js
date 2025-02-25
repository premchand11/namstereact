const RestroCard = (props) => {
  return (
    <div className="card">
      <img src={props.restaurant.image}></img>
      <h2>{props.restaurant.name}</h2>
      <h3>{props.restaurant.data?.cuisines.join(",")}</h3>
      <h4>{props.restaurant.rating} stars</h4>
    </div>
  );
};

export default RestroCard;