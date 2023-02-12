import React from 'react'

type Props = { data: { name: string, symbol: string, iconUrl: string } }

const SidebarItem = (props: Props) => {
  return (
    <div className='px-4'>
      <div className='py-4 border-b border-light w-full flex items-start gap-x-2'>
        <img className='w-3' src={props.data.iconUrl} alt="" />
        <div className='text-xs text-left font-medium'>
          <div className='text-primary leading-none'>{props.data.symbol}</div>
          <div className='text-help mt-2'>{props.data.name}</div>
        </div>
      </div>
    </div>
  )
}

export default SidebarItem;