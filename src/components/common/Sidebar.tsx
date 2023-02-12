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

  const resetFilter = () => {
    props.setFilter('');
  }

  const [search, setSearch] = useState<string>('');
  const [coinList, setCoinList] = useState<Coins>();

  const handleSearch = (e: { target: { value: string } }) => {
    let value = e.target.value;
    setSearch(value);
  }

  useEffect(() => {
    let result = search && props.coins ? getSearchedCoins(props.coins, search) : props.coins;

    setCoinList(result)
  }, [search, props.coins])

  return (
    <div
      className={`w-64 bg-white border-r border-light min-h-screen h-screen sticky top-0 overflow-y-auto`}>
      <div className='sticky top-0 bg-white py-4 border-b border-light'>
        <div className='px-4 flex gap-x-2'>
          <img onClick={resetFilter} className="cursor-pointer" src={backIcon} alt="" />
          <span className='text-secondary'>Cryptos</span>
        </div>

        <div className='px-4 mt-4'>
          <div className='border border-dark py-2 px-3.5 flex rounded gap-x-2'>
            <img src={searchIcon} alt="" />
            <input value={search} onChange={handleSearch} className='focus:outline-none w-full text-xs' placeholder='Search' type="text" />
          </div>
        </div>
      </div>

      <div className='mt-4'>
        {coinList && coinList.map(d => (
          <SidebarItem setFilter={props.setFilter} active={props.filter === d.symbol ? true : false} data={d} key={d.uuid} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar