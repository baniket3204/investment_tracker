import React from "react";
import "./Coin.css";
const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p classname="coin-price"> $ {price}</p>

          <p classname="coin-volume">$ {volume.toLocaleString()}</p>
          <p className="coin-marketcap">
            Mkt Cap : {marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Coin;
