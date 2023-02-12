import React, { useState, useEffect } from 'react';


import Sidebar from "./components/common/Sidebar"
import ItemGridView from "./views/ItemGridView";

import { useGetAllCoinsQuery } from './services/coins';

import { getFilteredCoins } from "./global/util"

function App() {

  const { data, error, isLoading } = useGetAllCoinsQuery('');

  const [filter, setFilter] = useState<string>('');

  const filteredCoins = data && filter ? getFilteredCoins(data?.data.coins, filter) : data ? data?.data.coins : []

  return (
    <div className="App">
      <main className='flex'>
        {
          error ?
            <div>Something went Wrong</div> :
            isLoading ?
              <div>Loading...</div> :
              <>
                {<Sidebar setFilter={setFilter} filter={filter} coins={data?.data.coins} />}
                {<ItemGridView coins={filteredCoins} />}
              </>
        }
      </main>
    </div>
  );
}

export default App;
