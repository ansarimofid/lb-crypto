import React from 'react'
import SidebarItem from "./SidebarItem"

import backIcon from "../../assets/img/arrow-left.svg"
import searchIcon from "../../assets/img/search.svg"

import { Coins } from "../../global/type"

interface SidebarProps {
  coins: Coins | undefined,
  filter: string,
  setFilter:(filter:string) => void
}

const Sidebar = (props: SidebarProps) => {

  console.log(props, "Props")
  return (
    <div
      className={`w-64 bg-white border-r border-light min-h-screen h-screen sticky top-0 overflow-y-auto`}>
      <div className='sticky top-0 bg-white py-4 border-b border-light'>
        <div className='px-4 flex gap-x-2'>
          <img src={backIcon} alt="" />
          <span className='text-secondary'>Cryptos</span>
        </div>

        <div className='px-4 mt-4'>
          <div className='border border-dark py-2 px-3.5 flex rounded gap-x-2'>
            <img src={searchIcon} alt="" />
            <input className='focus:outline-none w-full text-xs' placeholder='Search' type="text" />
          </div>
        </div>
      </div>

      <div className='mt-4'>
        {props.coins && props.coins.map(d => (
          <SidebarItem setFilter={props.setFilter} active={props.filter===d.symbol?true:false} data={d} key={d.uuid} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar