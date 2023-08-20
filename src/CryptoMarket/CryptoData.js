import React from 'react'

const CryptoData = ({id, image, symbol, name, market_cap, price_change_24h, total_volume, current_price }) => {
  return (
    <div className='single-row'>
    <div className='singleItem'>
      <div className="coin-name">
        <img src={image} alt='imgae' />
        <p className='name'> {name}</p>
      </div>
        <p className='symbol'> {symbol} </p>
        <p> ${current_price}</p>   
        <p> ${total_volume}</p>
        <p style = {{color: price_change_24h > 0 ? 'green' : 'red' }}> ${price_change_24h.toFixed(2)}</p>
        <p className='cap'> Mkt Cap: {`${market_cap.toLocaleString()}`}</p>
    </div>
    </div>
  );
}

export default CryptoData
