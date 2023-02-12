import React from 'react'
import { TsCoinAvatar } from '../../global/type'

type Props = {
  avatar: TsCoinAvatar
}

const CoinAvatar = (props: Props) => {
  return (
    <div className='w-12 h-12 relative rounded-full flex items-center justify-center overflow-hidden'>

      {/* bg */}
      <div style={{ backgroundColor: props.avatar.color }} className='absolute w-full h-full top-0 left-0 opacity-[12%]'></div>

      <img className='w-5 h-5 relative' src={props.avatar.iconUrl} alt="" />
    </div>
  )
}

export default CoinAvatar