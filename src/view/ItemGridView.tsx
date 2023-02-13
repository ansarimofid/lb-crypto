import React from 'react'
import { Coins } from "../global/type"
import ItemCard from '../components/item/ItemCard'

import backIcon from "../assets/img/arrow-left.svg"
import btcIcon from "../assets/img/bitcoinsvg.svg"

type Props = {
  coins: Coins | undefined,
  setFilter: (filter: string) => void
}

const ItemGridView = (props: Props) => {

  // Resets filter on back button click
  const resetFilter = () => {
    props.setFilter('');
  }

  return (
    <div className='mb-10 w-full'>
      {/* //Header with back button(on mobile) and title */}
      <div className='px-6 z-10 bg-white sticky top-0 md:static flex items-center gap-x-2 py-4 md:pt-4 md:pb-0 border-b md:border-b-0 border-light'>
        <img onClick={resetFilter} className="cursor-pointer md:hidden" src={backIcon} alt="" />
        <img className='hidden md:inline-block w-4 h-4' src={btcIcon} alt="Bitcoin" />
        <h2 className='text-primary text-base font-semibold'> My Cryptos</h2>
      </div>

      {/* Coin Grid */}
      <div className='px-6 mt-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
        {
          props.coins && props.coins.map(d => (<ItemCard key={d.uuid} coin={d} />))
        }
      </div>
    </div>
  )
}

export default ItemGridView