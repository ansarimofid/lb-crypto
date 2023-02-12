import React from 'react'
import { Coins } from "../global/type"
import ItemCard from "../components/ItemCard"

type Props = {
  coins: Coins | undefined
}

const ItemGridView = (props: Props) => {
  return (
    <div className='px-6 mb-10 w-full'>
      <h2 className='text-primary text-base mt-4 font-semibold'> My Cryptos</h2>
      <div className='mt-6 grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
          props.coins && props.coins.map(d => (<ItemCard key={d.uuid} coin={d} />))
        }
      </div>
    </div>
  )
}

export default ItemGridView