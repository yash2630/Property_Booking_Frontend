import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";
import React from 'react';


const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("http://localhost:8800/api/hotels?featured=true")

    const images = [
    "https://images.oyoroomscdn.com/uploads/hotel_image/106613/large/7bd0f86de736be4b.jpg",
    "https://images.oyoroomscdn.com/uploads/hotel_image/114984/large/34fe9f2b68bbd9d3.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
  ];
  return (
    <div className="fp">
      {loading ? ("Loading") : (<>
        {data.map((item,i) => (


        <div className="fpItem" key={item._id}>
          <img
            src={images[i]}
            alt=""
            className="fpImg"
          />
          <span className="fpName">{item.name}</span>
          <span className="fpCity">{item.city}</span>
          <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
          {item.rating && <div className="fpRating">
            <button>{item.rating}</button>
            <span>Excellent</span>
          </div>}
        </div>
        ))}
      </>)}
    </div >
  );
};

export default FeaturedProperties;
