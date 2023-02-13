import React from 'react'

// Right side content skeleton 
const ContentSkeleton = () => {
  return (
    <div className='mb-10 w-full'>
      <div className='rounded h-8 mx-6 z-10 animate-pulse bg-slate-200 sticky top-0 md:static flex items-center gap-x-2 my-4 md:mt-4 md:mb-0'>
      </div>
      <div className='w-full px-6 mt-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
        {
          [...Array(20)].map((i,index) =>
            <div key={index} className='animate-pulse bg-slate-200 w-full h-60 rounded'></div>
          )
        }
      </div>
    </div>
  )
}

export default ContentSkeleton