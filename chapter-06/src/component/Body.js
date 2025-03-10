import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { mockData } from '../utils/mockData';

const Body = () => {
  const [restaurantData, setRestaurantData] = useState(mockData);
  const [filteredRestaurant, setFilteredRestaurant] = useState(mockData);
  const [searchText, setSearchText] = useState('');

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://www.swiggy.com/mapi/restaurants/search/v3?lat=20.2959847&lng=85.8246101&str=restaurant&trackingId=51bfa637-a940-5822-eb94-9caf090c30f8&submitAction=ENTER&queryUniqueId=74637fb4-1a85-70a9-5e9f-9a2c86995d03'
  //     );
  //     const data = await response.json();
  //     const restaurants =
  //       data?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.slice(
  //         1,
  //         100
  //       ) || [];
  //     setRestaurantData(restaurants);
  //     setFilteredRestaurant(restaurants);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSearch = () => {
    const filteredList = restaurantData.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredList);
  };

  const filterTopRestaurant = () => {
    const filteredTopRestaurants = restaurantData.filter(
      (res) => res.ratings >= 4 
    );
    setFilteredRestaurant(filteredTopRestaurants);
  };

  
  return (
    <div className="body-container">
      <div className="filter-bar">
        <div className="search-box">
          <input
            type="text"
            placeholder="search something...."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={filterTopRestaurant}>
          Top restaurant
        </button>
      </div>
      <div className="rest-list">
        {filteredRestaurant.length ? (
          filteredRestaurant.map((res, index) => {
            return <RestaurantCard key={index} resData={res} />;
          })
        ) : (
          <Shimmer/>
        )}
      </div>
    </div>
  );
};

export default Body;
