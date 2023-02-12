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
    <div onClick={onItemClick} className={`${props.active ? 'bg-active border-r-2 border-active-border' : ''} px-4 cursor-pointer`}>
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