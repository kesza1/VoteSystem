import React from 'react'

export const VoteResult = ({options}) => {
  return (
    <div className='flex flex-col gap-4 bg-slate-700 w-75 rounded-md'>
   <h3 className='text-center text-2xl'>Eredmény</h3>
   <div>
   {options.map(({id, text, votes})=>
   <div key={id}>{text}: <span className='font-bold'>{votes.length}</span></div>
  )}
  </div>
    </div>
  )
}


