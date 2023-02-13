import React from 'react'
import { Coin } from "../../global/type"

import { getPricefromPercent } from "../../global/util"

type Props = {
  coin: Coin
}

const PriceChangeTicker = (props: Props) => {

  let coin: Coin = props.coin;

  //Get change price using change percentage and actual price
  let changePrice = getPricefromPercent(coin.price, coin.change)
  let change = parseFloat(coin.change);

  return (
    <div className={`text-lg font-semibold flex items-baseline gap-x-1 ${change === 0 ? 'text-yellow-400' : change > 0 ? 'text-success' : 'text-danger'}`}>
      <span>${changePrice}</span>
      <span className='text-xs'>({coin.change}%)</span>

      {/* Rotate Icon and change icon color based on  price change(positive, negative, none) */}
      {change ? <svg className={change < 0 ? 'rotate-180' : ''} width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={change > 0 ? 'fill-success' : 'fill-danger'} d="M5.5 0L10.2631 4.5H0.73686L5.5 0Z" />
      </svg> : ''}
    </div>
  )
}

export default PriceChangeTicker