import axios from "axios";
import React, { useEffect, useState } from "react";
import "../median-calculator/median-calculator.css";


export default function MedianCalculator() {

  const [price, setPrice] = useState([]);

  const [fear, setFear] = useState([]);

  const fetchFear = async () => {
    const { data } = await axios.get("https://api.alternative.me/fng/")
    setFear(data)
  }

  const fetchPrice = async () => {
    const { data } = await axios.get("https://api.blockchain.com/v3/exchange/tickers/BTC-USD")
    setPrice(data)
  }

  useEffect(() => {
    fetchPrice();
    fetchFear();
  }, [])

  let lastPrice = price.last_trade_price;
  let todayPrice = price.price_24h;
  let fng = fear.data.map(data => {
    return data.value
  })


  return (
    <div>

      <div className="median-main-content">
        <div className="median-header">
          <h2 className="median-title">&#x1F60E; The median last month was: <br /> {lastPrice}</h2>
          <h2 className="median-today">&#x1F916;	 The median today is <br /> {todayPrice}</h2>
          <h2 className="fng-today">&#x1F916;	 The Fear and Greed index today is {fng}</h2>
        </div>
        <div>
          <div className="results-container">
            <div className="buy">
              <p>Lorem Ipsum <br /> consectetur adipiscing elit.  <br />Cras ut mollis nunc,</p>

              <button className="button-buy">Buy Bitcoin</button>
            </div>
            <div className="sell">
              <p>Lorem Ipsum <br /> consectetur adipiscing elit.  <br />Cras ut mollis nunc,</p>

              <button className="button-sell">Sell Bitcoin</button>
            </div>
          </div>
        </div>
      </div>
      <div className="guide">
          {todayPrice < lastPrice && fng < 20 ? <h2>According to your settings you should buy bitcoin</h2> 
          : todayPrice > lastPrice && fng > 80 ? <h2>According to your settings you should sell bitcoin</h2> 
          : <button>Click here to receive an email with hodl information</button>
          }
        </div>

    </div>
  )
}




