import React, {useEffect, useState} from 'react';
import Crypt from './Crypt';
import './Crypto.css';


const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';




const CryptoApp = () => {
const [data, setData]  = useState([]);
const [search, setSearch] = useState('');


const fetchItem = async () => {
  try {
    const res = await fetch(url);
  const data = await res.json();
  // console.log(data);
  setData(data);
  } catch (error) {
    console.log(error);
  }
 
} 
useEffect(()=> {
  fetchItem();
}, []);
const handleChange = (e) => {
  setSearch(e.target.value);
  console.log(search);
}

const filtercoin = data.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())
)
console.log(filtercoin);
  return (
    <div className='container'>
    <div className='wrapper'>
      <h1> Search a Currency</h1>
      <input type='text' className='input'
      name='input'
      onChange={handleChange}
      value={search}
       placeholder="Enter coin's name" />
    </div>
    <Crypt data={data} filtercoin={filtercoin} search={search}/>
    {filtercoin.length < 1 && <h1> No coin match your search!</h1>}
    
    </div>
  )
}

export default CryptoApp;

