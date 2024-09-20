import { useState } from 'react'
import './App.css'

function App() {

  const [color,setColor]=useState('lavender')


  return (
   <div className='w-full h-screen duration-200'
   style={{backgroundColor:color}}>

    <div className='fixed flex flex-wrap justify-center bottom-9 inset-x-0 px-2 font-serif'>
    <div className='w-auto flex flex-wrap bg-stone-200 h-auto justify-center gap-4  px-5 py-2 rounded-full shadow-lg'>
      <button onClick={()=>setColor("red")} className='bg-red-300 py-1 rounded-full px-5'style={{backgroundColor:"red"}} >Red</button>
      <button onClick={()=>setColor("blue")} className='bg-red-300 py-1 rounded-full px-5 shadow-lg' style={{backgroundColor:"blue"}} >Blue</button>
      <button onClick={()=>setColor("yellow")} className='bg-red-300 py-1 rounded-full px-5 shadow-lg' style={{backgroundColor:"yellow"}} >Yellow</button>
      <button onClick={()=>setColor("green")} className='bg-red-300 py-1 rounded-full px-5 shadow-lg' style={{backgroundColor:"green"}} >Green</button>
      <button onClick={()=>setColor("azure")} className='bg-red-300 py-1 rounded-full px-5 shadow-lg' style={{backgroundColor:"azure"}} >Azure</button>
      <button onClick={()=>setColor("pink")} className='bg-red-300 py-1 rounded-full px-5 shadow-lg' style={{backgroundColor:"pink"}} >Pink</button>
      <button onClick={()=>setColor("whitesmoke")} className='bg-red-300 py-1 rounded-full px-5 shadow-lg' style={{backgroundColor:"whitesmoke"}} >WhiteSmoke</button>

    </div>
    </div>
   </div>
  )
}

export default App
