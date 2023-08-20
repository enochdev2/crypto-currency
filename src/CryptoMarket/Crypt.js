import React from 'react';
import CryptoData from './CryptoData';

const Crypt = ({data, search, filtercoin}) => {

  return (
    <div className='row'>
      {filtercoin.map((item)=>{
        const  {id, image, market_cap, symbol, price_change_24h, total_volume, current_price } = item;
        return (  
          <CryptoData key={id} {...item}/>
          );
          
      })}
    </div>
  )
}

export default Crypt;
