
import React from 'react'
import { getMaxVote } from '../utils';


export const VoteList = ({ options, setSelected }) => {
  const isWinner = getMaxVote(options)
  console.log(isWinner);
  
  
  console.log(options)

  return (
    <div className='flex flex-col gap-4'>
      {options.map(({ id, imgUrl, text, votes }) => {
        const isWinner = votes.length == getMaxVote(options) 
        console.log(isWinner);
        return <div key={id} className={`max-w-75 bg-slate-700 p-4 ${isWinner ? ' border-4 border-green-500  ' : '  '}`}>
          <img className='w-full' src={imgUrl} alt={text} />
          <div className='text-2xl text-center'>{text}</div>
          <button className='bg-slate-500 p-2 rounded-md cursor-pointer hover:bg-slate-900' onClick={() => setSelected({ id, text })}>
            Szavazok
          </button>
        </div>
      }
      )}
    </div>
  )
}
