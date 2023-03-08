import AllContext from '@/store/AllContext'
import React, { useContext, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Header() {
  const {ref,inView} = useInView()
  const [hasViewed,sethasViewed] = useState(false)
  useEffect(()=>{
    if(!inView || hasViewed){return}
    sethasViewed(true)
  },[inView])
  return (
    <div className='mb-12 flex justify-center md:justify-start ml-[5%]' ref={ref}>
        <h1 className={`text-thick-text text-center before:right-0 md:text-left underline underline-offset-[8px] before:bg-bg-main decoration-wavy decoration-1 decoration-sundry text-3xl leading-[39px] sm:text-4xl md:text-5xl md:leading-[38px] relative ${hasViewed?"before:w-0":"before:w-full"} before:absolute  before:-bottom-4 before:h-[50%] before:transition-all before:duration-[3s] before:rotate-180
    `}>Who Am I</h1>
    </div>


  )
}
