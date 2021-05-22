import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The Secrects of Life"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/514sscPA15L._AC_SX184_.jpg"
            rating={4}
          />
          <Product
            title="The Warren Buffett Way"
            price={19.99}
            image="https://m.media-amazon.com/images/I/71cpg1IduoL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Tools of Titans"
            price={17.99}
            image="https://m.media-amazon.com/images/I/710FF4JrjsL._AC_UY218_.jpg"
            rating={3}
          />
          <Product
            title="Think and Grow Rich"
            price={16.99}
            image="https://m.media-amazon.com/images/I/81l6yypiTvL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            title="Make Time: How to focus on what matters every day"
            price={14.99}
            image="https://m.media-amazon.com/images/I/81d9H4axKML._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="OnePlus Buds Z (White) "
            price={29.99}
            image="https://m.media-amazon.com/images/I/31fir6OjqLL.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
