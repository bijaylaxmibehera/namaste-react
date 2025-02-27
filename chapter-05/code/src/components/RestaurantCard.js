const RestaurantCard=({resData})=>{
    const {imageUrl,name,cuisine,ratings,priceForTwo,deliveryTime}=resData;
    return (
        <div className="res-card-container">
           <div className="res-logo">
            <img src={imageUrl} alt="restaurant logo"/>
           </div>
           <div className="res-details">
              <h3>{name}</h3>
              <p>{cuisine}</p>
              <p>{ratings} star</p>
              <p>₹{priceForTwo} FOR TWO</p>
              <p>{deliveryTime}min</p>
           </div>
        </div>
    )
}

export default RestaurantCard;