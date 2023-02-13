import React, {useState} from 'react'

import searchIcon from "../../../assets/img/search.svg"

type Props = {
  handleSearch:(value: string)=>void
}

const SidebarSearchInput = (props: Props) => {

  const [search, setSearch] = useState<string>('');

  //Sets search state on input change
  const handleSearch = (e: { target: { value: string } }) => {
    let value = e.target.value;
    setSearch(value);
    props.handleSearch(value)
  }


  return (
    <div className='border border-dark py-2 px-3.5 flex rounded gap-x-2'>
      <img src={searchIcon} alt="" />
      <input value={search} onChange={handleSearch} className='focus:outline-none w-full text-xs' placeholder='Search' type="text" />
    </div>
  )
}

export default SidebarSearchInput