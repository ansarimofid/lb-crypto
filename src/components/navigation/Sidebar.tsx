import React, { useEffect, useState } from 'react'
import SidebarItem from "./SidebarItem"

import backIcon from "../../assets/img/arrow-left.svg"
import searchIcon from "../../assets/img/search.svg"

import { Coins } from "../../global/type"
import { getSearchedCoins } from '../../global/util'

interface SidebarProps {
  coins: Coins | undefined,
  filter: string,
  setFilter: (filter: string) => void
}

const Sidebar = (props: SidebarProps) => {

  //reset filter on back button clock
  const resetFilter = () => {
    props.setFilter('');
  }

  // State for storing input
  const [search, setSearch] = useState<string>('');
  const [coinList, setCoinList] = useState<Coins>();

  //Sets search state on input change
  const handleSearch = (e: { target: { value: string } }) => {
    let value = e.target.value;
    setSearch(value);
  }

  //Filters result based on search query
  //TODO: Add debounce to reduce unwanted calls
  useEffect(() => {
    let result = search && props.coins ? getSearchedCoins(props.coins, search) : props.coins;

    setCoinList(result)
  }, [search, props.coins])

  return (
    <div
      className={`md:w-64 bg-white border-r border-light md:min-h-screen h-12 md:h-screen sticky z-10 bottom-0 md:top-0 overflow-y-hidden md:overflow-y-auto flex-shrink-0 w-full overflow-x-hidden`}>
      <div className='hidden md:block sticky top-0 bg-white py-4'>
        <div className='px-4 flex gap-x-2'>
          {/* Show back button only on mobile devices */}
          <img onClick={resetFilter} className="cursor-pointer" src={backIcon} alt="" />
          <span className='text-secondary'>Cryptos</span>
        </div>

        {/* Search Button */}
        <div className='px-4 mt-4'>
          <div className='border border-dark py-2 px-3.5 flex rounded gap-x-2'>
            <img src={searchIcon} alt="" />
            <input value={search} onChange={handleSearch} className='focus:outline-none w-full text-xs' placeholder='Search' type="text" />
          </div>
        </div>
      </div>

      {/* Coin List */}
      <div className='flex md:block overflow-x-auto md:overflow-hidden h-20 md:h-auto'>
        {coinList && coinList.map(d => (
          <SidebarItem setFilter={props.setFilter} active={props.filter === d.symbol ? true : false} data={d} key={d.uuid} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar