import "./propertyList.css";
import useFetch from "../../hooks/useFetch";
import React from 'react';

const PropertyList = () => {

  const { data, loading, error } = useFetch("http://localhost:8800/api/hotels/countByType")

  const images = [
    "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
    "https://mldllifespacebucket01.s3.amazonaws.com/2019/10/vicino-overview.jpg",
    "https://www.ncrgruhalaxmi.com/blog/wp-content/uploads/2017/11/Modern-Apartment-Decor-1.jpg",
    "https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
  ];

  return (
    <div className="pList">
      {loading ? ("loading") : (
        <>
          {data && images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
