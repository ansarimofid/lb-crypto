import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

import { Coin, ApiResponse } from "./global/type"

import Sidebar from "./components/common/Sidebar"
import ItemGridView from "./views/ItemGridView";

function App() {

  const [data, setData] = useState<{ coins: Array<Coin> }>()

  let baseUrl = "https://api.coinranking.com/v2";

  const options = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': process.env.REACT_APP_API_KEY,
    },
  };

  async function fetchData() {
    let rs = await fetch(`${baseUrl}/coins`);
    // setData(rs.data)
    let jsonRes: ApiResponse = await rs.json();
    setData({ coins: jsonRes.data.coins })

    //rws.json().
    //{status:string, data:{stats, coins}}
  }

  useEffect(() => {
    console.log(process.env)
    let data = fetchData();
    console.log("data", data)
  }, [1])

  return (
    <div className="App">
      <main className='flex'>
        {data && <Sidebar coins={data.coins} />}
        {data && <ItemGridView coins={data.coins} />}
      </main>
    </div>
  );
}

export default App;
