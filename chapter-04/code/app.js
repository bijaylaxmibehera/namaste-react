import React from "react";
import ReactDOM from "react-dom/client";

/*Page layout*/
/*
Header
 - Logo
 - NavItems
Body 
 -Search
 -Restaurant Card
   - Dish Name
   - Image
   - Restaurant Name
   - Rating
   - Cuisines
   - Time to deliver
Footer
 - Copyright
 - Links
 - Address
 - Contact
*/


const Header=()=>{
    return (
        <div className="header-container">
            <div className="brand-logo">
                <img src="https://icon-library.com/images/order-food-online-icon/order-food-online-icon-5.jpg" alt="brand logo"/>
                <h3 id="brand-name">Crave<span>Cart</span></h3>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard=(props)=>{
    return (
        <div className="res-card-container">
           <div className="res-logo">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/gfd5pzxes0hjuxdepvvp" alt="restaurant logo"/>
           </div>
           <div className="res-details">
              <h3>{props.name}</h3>
              <p>{props.cuisine}</p>
              <p>{props.ratings} star</p>
              <p>₹300 FOR TWO</p>
              <p>45min</p>
           </div>
        </div>
    )
}

const Body=()=>{
    return (
        <div className="body-container">
            <div className="filter-bar">
                <div className="search-box">
                    <input type="text" placeholder="search something...."/>
                    <button className="search-btn">search</button>
                </div>
            </div>
            <div className="rest-list">
                  <RestaurantCard name={"Chancellor"} cuisine={"Indian, Chinese"} ratings={"4.3"}/>
                  <RestaurantCard name={"KFC"} cuisine={"Fast food"} ratings={"4.0"}/>
            </div>

        </div>
    )
}


const AppLayout=()=>{
    return (
        <div className="app">
          <Header/>
          <Body/>
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)