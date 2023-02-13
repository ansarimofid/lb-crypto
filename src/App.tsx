import React, { useState, useEffect } from 'react';


import Sidebar from "./components/common/Sidebar"
import SidebarSkeleton from "./components/skeleton/SidebarSkeleton"

import ItemGridView from "./views/ItemGridView";
import ContentSkeleton from "./components/skeleton/ContentSkeleton"

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

  // const getDummyCard() {
  //   for(let i=0;i<20;i++)
  // }

  return (
    <div className="App">
      <main className='flex flex-col-reverse md:flex-row min-h-screen justify-between'>
        {
          error ?
            <div className='text-center'>Something went Wrong! Please refresh the page.</div> :
            isLoading ?
              <>
                <SidebarSkeleton />
                <ContentSkeleton />
              </> :
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
