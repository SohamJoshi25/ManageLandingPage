import React from 'react'

function FeatureCard(props) {
  return (
    <div className=' p-6 flex flex-row space-x-4'>
        <h1 className="h-7 inline w-10 px-3 m-1 rounded-xl align-middle text-center text-white bg-orange-500">{props.itr>=10?props.itr:"0"+props.itr}</h1>
        <div>
            <h2 className="text-xl font-bold mb-3 text-indigo-950">{props.title}</h2>
            <p className='text-slate-600'>{props.text}</p>
        </div>
    </div>
  )
}

export default FeatureCard