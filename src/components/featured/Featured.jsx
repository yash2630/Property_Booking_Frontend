import React from 'react';
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const { data, loading, error } = useFetch("http://localhost:8800/api/hotels/countByCity?cities=bangalore,mumbai,delhi")

  console.log(data)
  return (
    <div className="featured">
      {loading ? ("Loading please wait"
        ) : (
        <><div className="featuredItem">
          <img
            src="https://media.gettyimages.com/id/1246464390/photo/the-lovely-vidhan-soudha.jpg?s=612x612&w=gi&k=20&c=zXOBdw0y-O1QneoVc4YKKsV8nFkZVfWZVj4Nhs9pAQM="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Bangalore</h1>
            <h2>{data[0]} properties</h2>
          </div>
        </div>

          <div className="featuredItem">
            <img
              src="https://thumbs.dreamstime.com/b/gateway-india-mumbai-gateway-india-arch-monument-built-th-century-mumbai-india-monument-was-138091856.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
          </>
          )}
    </div>
  );
};

export default Featured;
