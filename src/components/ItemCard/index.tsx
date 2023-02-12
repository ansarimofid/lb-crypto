import React from 'react'
import {Coin} from "../../global/type"

type Props = {
  coin: Coin
}

const index = (props: Props) => {
  return (
   <div>
     <div>index</div>
    {props.coin.name}
   </div>
  )
}

export default index