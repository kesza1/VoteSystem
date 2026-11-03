
import { useState } from 'react'
import { hasVoted } from '../utils'

export const VoteForm = ({ options, setOptions, selected, setSelected }) => {
 const [name, setName]  = useState('')
 const [msg, setMsg] = useState('')
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(name);
  if(hasVoted(options,name.trim)){
    setMsg('Már szavaztál!')
    return
  }
  if  (!name.trim()){
    setMsg('Add meg a neved')
  return
  }
  setOptions(prev=>prev.map(obj=>obj.id==selected.id ? ({...obj,votes:[...obj.votes,name]}) : obj))
setSelected(null)
}
  return (
    <div className='border border-slate-300 p-4 mt-4 bg-slate-800 rounded-md'>
      <h3>A következőre szavazok: <span className='font-bold'>{selected.text}</span></h3>
      <form onSubmit={handleSubmit} className='flex-col flex gap-4'action="">
        <label htmlFor="name">Add meg a neved:</label>
    <input id='name' type="text" className='border border-slate-500 w-full rounded-md p-4 '
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
    <div className='flex justify-between'>
      <button type='submit' className='bg-slate-500 p-2 rounded-md cursor-pointer hover:bg-slate-900'>
    Mentés
      </button>
   <button onClick={()=>setSelected(null)} className='bg-slate-700 p-2 rounded-md cursor-pointer hover:bg-slate-900'>
    Mégsem
   </button>
    </div>
      </form>
{msg && <div>{msg}</div>}
    </div>
  )
}

