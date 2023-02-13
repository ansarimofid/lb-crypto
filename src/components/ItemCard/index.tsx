import React from 'react'
import { Coin } from "../../global/type"
import { getPricefromPercent, getFormattedNumber } from "../../global/util"
import CoinAvatar from "./CoinAvatar"
type Props = {
  coin: Coin
}

const index = (props: Props) => {
  let coin: Coin = props.coin;

  //Get change price using change percentage and actual price
  let changePrice = getPricefromPercent(coin.price, coin.change)
  let change = parseFloat(coin.change);
  return (
    <div className='bg-lb-gray-025 border border-light rounded p-6 flex gap-x-3'>
      {/* Coin Symbol */}
      <div className='w-12 h-12'>
        <CoinAvatar avatar={{ color: coin.color, iconUrl: coin.iconUrl }} />
      </div>

      {/* Coin Metas */}
      <div className='w-full'>
        {/* Coin name and symbol */}
        <div>
          <h3 className='font-semibold text-secondary text-base'>{coin.name}</h3>
          <p className='font-semibold text-help-light mt-1 text-xs uppercase'>{coin.symbol}</p>
        </div>

        {/* Coin change */}
        <div className='mt-4'>
          <p className={`text-lg font-semibold flex items-baseline gap-x-1 ${change == 0 ? 'text-yellow-400' : change > 0 ? 'text-success' : 'text-danger'}`}>
            <span>${changePrice}</span>
            <span className='text-xs'>({coin.change}%)</span>

            {/* Rotate Icon when change is negative */}
            {change ? <svg className={change < 0 ? 'rotate-180' : ''} width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className={change > 0 ? 'fill-success' : 'fill-danger'} d="M5.5 0L10.2631 4.5H0.73686L5.5 0Z" />
            </svg> : ''}
          </p>
          <p className='text-help font-medium uppercase text-xs'>Change</p>
        </div>

        {/* Divider */}
        <div className='w-full border-b border-light my-3'></div>

        {/* Buy and sell data */}
        <div className='flex gap-x-6'>
          <div>
            <p className='text-primary text-sm font-semibold'>${getFormattedNumber(coin.price)}</p>
            <p className='text-lb-gray-500 text-xs'>Buy</p>
          </div>
          <div className='border-l border-light'></div>
          <div className=''>
            <p className='text-primary text-sm font-semibold'>${getFormattedNumber(coin.price)}</p>
            <p className='text-lb-gray-500 text-xs'>Sell</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index