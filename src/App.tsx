import React, { useState, useEffect } from 'react';

// Component Import
import Sidebar from "./components/navigation/Sidebar"
import SidebarSkeleton from "./components/skeleton/SidebarSkeleton"

import ItemGridView from "./views/ItemGridView";
import ContentSkeleton from "./components/skeleton/ContentSkeleton"

//Redux action import
import { useGetAllCoinsQuery } from './services/coins';

//type and ultity import
import { getFilteredCoins } from "./global/util"
import { Coins } from './global/type';

function App() {

  //gets API states
  const { data, error, isLoading } = useGetAllCoinsQuery('');

  // Keeps track of which item has been clicked from sidebar
  const [filter, setFilter] = useState<string>('');

  //Stores state of coins when filter is applied
  const [filteredCoins, setFilteredCoins] = useState<Coins>();

  //Fetches filtered data when changes are made in filter or data state.
  useEffect(() => {
    let filteredCoins = data && filter ? getFilteredCoins(data?.data.coins, filter) : data ? data?.data.coins : []
    setFilteredCoins(filteredCoins)
  }, [filter, data])

  return (
    <div className="App">
      <main className='flex flex-col-reverse md:flex-row min-h-screen justify-between'>
        {
          error ?
          // Handles API Error
            <div className='text-center'>Something went Wrong! Please refresh the page.</div> :
            isLoading ?
            //Skeleton loading when API call is in progress
              <>
                <SidebarSkeleton />
                <ContentSkeleton />
              </> :

              // Component render when API is loaded
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
