import React from 'react'

type Props = {}

const SidebarSkeleton = (props: Props) => {
  return (
    <div className='animate-pulse md:w-60 bg-slate-200 md:min-h-screen h-12 md:h-screen sticky z-10 bottom-0 md:top-0 overflow-y-hidden md:overflow-y-auto flex-shrink-0 w-full overflow-x-hidden'></div>
  )
}

export default SidebarSkeleton