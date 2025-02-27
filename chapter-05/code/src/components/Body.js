import { useState } from 'react'
import { mockData } from '../utils/mockData'
import RestaurantCard from './RestaurantCard'

const Body = () => {
  const [restaurantData, setRestaurantData] = useState(mockData);
  const [filtredRestaurant,setFilteredRestaurant]=useState(mockData);
  const [searchText, setSearchText] = useState('')

  const handleSearch = () => {
    const filteredList = restaurantData.filter(res =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    )
    setFilteredRestaurant(filteredList);
    setSearchText("");
  }

  const filterTopRestaurant = () => {
    const filteredRestaurant = restaurantData.filter(res => res.ratings >= 4)
    setRestaurantData(filteredRestaurant)
  }
  return (
    <div className='body-container'>
      <div className='filter-bar'>
        <div className='search-box'>
          <input
            type='text'
            placeholder='search something....'
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button onClick={filterTopRestaurant}>Top restaurant</button>
      </div>
      <div className='rest-list'>
        {filtredRestaurant.length ? (
         filtredRestaurant?.map(res => {
            return <RestaurantCard key={res.id} resData={res} />
          })
        ) : (
          <h3>No restaurant found</h3>
        )}
      </div>
    </div>
  )
}

export default Body
