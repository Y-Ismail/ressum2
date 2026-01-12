import { useState } from 'react'
import data from './data.json'
import viteLogo from '/vite.svg'



export default function App(){

  const [items] = useState(data)
  return (
    <div className='md:flex md:h-screen md:items-center md:justify-center md:max-w-3xl md:mx-auto '>
      <section className='md:flex bg-white shadow-2xl md:rounded-3xl'>
    <div className='bg-gradm p-8 text-center text-white rounded-b-4xl md:rounded-3xl mb-10 md:mb-0 md:flex-1 md:flex flex-col items-center justify-center'>
      <p className='mb-6'>Your Result</p>
      <div className='flex justify-center'>
        <p className='bg-gradc bg-(--Lightroyalbluebg)  w-25 h-25 md:w-40 md:h-40 rounded-full flex items-center justify-center flex-col'><span className='block text-white text-3xl font-bold md:text-6xl'>76</span> of 100</p>
      </div>

      <h2 className='my-6 text-white font-bold text-2xl'>Great</h2>
      <p>You scored higher than 65% of the people who have taken this tests.</p>
    </div>

  <div className='p-8 md:flex-1'>
    <h2 className='text-slate-600  text-lg font-bold'>Summary</h2>
    <div>{items.map((item,index) => 
      <div key={index} style={{
        backgroundColor : `${item.color}25`
      }} className='flex justify-between p-4 my-6 rounded-lg'>
        <h3 style={{color: item.color}} className='flex gap-2'>
          <img src={item.icon} alt={item.category} />
          {item.category}
        </h3>
        <p className='text-slate-400'>
          <span className='text-black'>{item.score}</span>/100
        </p>
      </div>
    )}</div>
    <button className='bg-slate-700 py-4 rounded-full text-white w-full hover:bg-indigo-600 transition-all duration-200'>Continue</button>
  </div>
  </section>
    </div>
  )
}
