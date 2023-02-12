import React from 'react'
import { Coins } from "../global/type"
import ItemCard from "../components/ItemCard"

type Props = {
  coins: Coins
}

const ItemGridView = (props: Props) => {
  return (
    <div className='px-6'>
      <h2 className='text-primary text-base mt-4 font-semibold'> My Cryptos</h2>
      <div className='mt-6'>
        {
          props.coins.map(d => (<ItemCard key={d.uuid} coin={d} />))
        }
      </div>
    </div>
  )
}

export default ItemGridView