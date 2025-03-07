import { CLOUDINARY_URL } from '../utils/constant'

const RestaurantCard = ({ resData }) => {
  const {
    areaName,
    availability,
    avgRating,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    locality,
    name,
    sla
  } = resData.card.card.info
  console.log(resData.card.card.info)
  return (
    <div className='res-card-container'>
      <div className='res-logo'>
        <img
          src={`${CLOUDINARY_URL}${cloudinaryImageId}`}
          alt='restaurant logo'
        />
      </div>
      <div className='res-details'>
        <h3>{name}</h3>
        <p>{cuisines.join(',')}</p>
        <p>{avgRating} star</p>
        <p>{costForTwoMessage}</p>
        <p>{sla.deliveryTime}min</p>
      </div>
    </div>
  )
}

export default RestaurantCard
