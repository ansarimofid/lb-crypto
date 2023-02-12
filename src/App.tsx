import React, { useState, useEffect } from 'react';


import Sidebar from "./components/common/Sidebar"
import ItemGridView from "./views/ItemGridView";

import { useGetAllCoinsQuery } from './services/coins';

import { getFilteredCoins } from "./global/util"
import { Coins } from './global/type';

function App() {

  const { data, error, isLoading } = useGetAllCoinsQuery('');

  const [filter, setFilter] = useState<string>('');
  const [filteredCoins, setFilteredCoins] = useState<Coins>();

  useEffect(() => {
    let filteredCoins = data && filter ? getFilteredCoins(data?.data.coins, filter) : data ? data?.data.coins : []
    setFilteredCoins(filteredCoins)
  }, [filter, data])

  return (
    <div className="App">
      <main className='flex flex-col-reverse md:flex-row min-h-screen justify-between'>
        {
          error ?
            <div>Something went Wrong</div> :
            isLoading ?
              <div>Loading...</div> :
              <>
                {<Sidebar setFilter={setFilter} filter={filter} coins={data?.data.coins} />}
                {<ItemGridView setFilter={setFilter} coins={filteredCoins} />}
              </>
        }
      </main>
    </div>
  );
}

export default App;
