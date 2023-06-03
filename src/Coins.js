import React from "react";
import { API, Auth } from "aws-amplify";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Coins() {
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);
  const fetchCoins = async () => {
    Auth.currentAuthenticatedUser().catch(() => {
      navigate("/");
    });
    const data = await API.get("cryptoapi", "/coins");
    //console.log(data);
    setCoins(data.coins);
  };
  useEffect(() => {
    fetchCoins();
  }, []);
  return (
    <div>
      <div>
        {coins.map((coin, index) => (
          <div key={index}>
            <h2>
              {coin.name} - {coin.symbol}
            </h2>
            <h5>${coin.price_usd}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coins;
