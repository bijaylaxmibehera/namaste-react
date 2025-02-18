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

const restaurantData=[{
    id:1,
    imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/gfd5pzxes0hjuxdepvvp",
    name:"Chancellor restaurant",
    cuisine:"Indian, chinese",
    ratings:4.3,
    priceForTwo:300,
    deliveryTime:45
},
{
    id:2,
    imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/g8hbdvszl8fwbmp1pqyp",
    name:"Narula's Restaurant",
    cuisine:"Indian, Chinese, Biriyani, Punjabi",
    ratings:4.4,
    priceForTwo:500,
    deliveryTime:50
},
{
    id:3,
    imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/yziui8hniylbr5h6rift",
    name:"Priya restaurant",
    cuisine:"Indian, Chinese, Tandoor, Salads, Thalis",
    ratings:4.5,
    priceForTwo:250,
    deliveryTime:35
},
{
    id:4,
    imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/g8hbdvszl8fwbmp1pqyp",
    name:"Pipul restaurant",
    cuisine:"Indian, chinese",
    ratings:4.4,
    priceForTwo:200,
    deliveryTime:40
},
{
    id:5,
    imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/r4rpaumlk63gytmpnsnw",
    name:"Shree Kunj restaurant",
    cuisine:"South Indian, Chinese, Sweets",
    ratings:4.3,
    priceForTwo:200,
    deliveryTime:20
},
{
    id:6,
    imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/19/81cecf43-6f86-4db3-917d-c39794c370df_549288%20(1).jpg",
    name:"Odiani Hotel & Restaurant",
    cuisine:"Fast Food, Snacks",
    ratings:4.3,
    priceForTwo:200,
    deliveryTime:40
},
{
    id:7,
    imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xwk19zkqddeuvvyx99sh",
    name:"Milan restaurant",
    cuisine:"North Indian, Chinese, Snacks",
    ratings:4.1,
    priceForTwo:250,
    deliveryTime:35
},
]

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
                {restaurantData.length ? (
                    restaurantData?.map(res =>{
                        return <RestaurantCard key={res.id} resData={res}/>
                    })
                ):(<h3>No restaurant found</h3>)}
                  
            </div>

        </div>
    )
}

const Footer=()=>{
    return (
        <div className="footer-container">
            <p>This is footer.</p>
        </div>
    )
}

const AppLayout=()=>{
    return (
        <div className="app">
          <Header/>
          <Body/>
          <Footer/>
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)