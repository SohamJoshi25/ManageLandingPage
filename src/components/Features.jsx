import React from 'react'
import FeatureCard from './FeatureCard'

const features = [
    {
        title:"Track company-wide progress",
        text:"See how your day today tasks fit into a wider vision .Go from tracking progress at a milestone level all the way done to the smallest of details never lose sight of the bigger picture again"
    },
    {
        title:"Advanced built in reports",
        text:"Set internal delivery estimates and track progress towards company goals are customizability dashboard helps build out the reports you need to keep key stakeholders informed "
    },
    {
        title:"The thing you need in one place",
        text:"Stop jumping from one service to another to communicate store files and track tasks and share documents manage offers all in one team productivity solution."
    }
    
]

function Features() {
  return (
    <div className=' mx-auto mt-20 container flex flex-row  space-x-20 w-3/4 p-4 text-left'>
        <div className="flex  flex-col space-y-12 w-1/2 p-4">
            <h2 className='text-5xl font-bold text-indigo-950'>Whats different about manage?</h2>
            <p className='text-xl font-light text-slate-450'>Manage provides all the functionality your team needs without the complexity our software is a tailor made for modern digital product teams.</p>
        </div>
        <div className='flex flex-col w-1/2 p-4'>
            {
                features.map((e,i)=>{
                    return (<FeatureCard title={e.title} text={e.text} itr={i+1}/>)
                })
            }
            
        </div>
    </div>
  )
}

export default Features