import { useState } from 'react'
import { optionList } from './data'
import './App.css'
import { VoteList } from './Components/VoteList'
import { VoteResult } from './Components/VoteResult'
import { VoteForm } from './Components/VoteForm'

import { motion } from 'framer-motion'



function App(){
const [options, setOptions] = useState(optionList)
const [selected, setSelected] = useState(null)

const title = ' Hova menjünk kirándulni?'.split('')
console.log(title);


  return (
   <>
   <div className='bg-slate-900 text-slate-50 min-h-screen'>

    
   
  <h1 className='text-center p-4 text-3xl'>
   {title.map((letter, index)=>
   <motion.span key={index} initial={{opacity:0}} animate={{opacity:1}} transition={{type:'spring', delay:index/10}}>{letter}</motion.span>
)}
  </h1>

   <div >
   

    
    <VoteList options={options} setSelected={setSelected}/>
    <div>
      <div className='flex flex-wrap gap-4 justify-center'>
<VoteResult options={options}/>
 {selected && <VoteForm options={options} setOptions={setOptions} selected={selected} setSelected={setSelected}/>}
      </div>
      
    </div>
   </div>
   </div>
    </>
  )

}
export default App
