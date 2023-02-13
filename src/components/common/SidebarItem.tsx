import React from 'react'

type Props = { 
  data: { name: string, symbol: string, iconUrl: string }, 
  active: boolean,
  setFilter:(filter:string) => void
}

const SidebarItem = (props: Props) => {

  const onItemClick = () => {
    props.setFilter(props.data.symbol)
  }
  return (
    <div onClick={onItemClick} className={`${props.active ? 'bg-active md:border-r-2 md:border-active-border' : ''} px-4 cursor-pointer flex-shrink-0`}>
      <div className={`${props.active ?'border-active-border md:border-light':'border-light'} py-4 border-t w-full flex items-start gap-x-2`}>
        <img className='w-3' src={props.data.iconUrl} alt="" />
        <div className='text-xs text-left font-medium'>
          <div className='text-primary leading-none'>{props.data.symbol}</div>
          <div className='text-help mt-2 hidden md:block'>{props.data.name}</div>
        </div>
      </div>
    </div>
  )
}

export default SidebarItem;