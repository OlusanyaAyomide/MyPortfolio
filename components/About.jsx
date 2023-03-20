import React, { Fragment, useContext,useEffect } from 'react'
import Bitmoji from "../public/Bitmoji.png"
import Image from 'next/image'
import Header from './Heading'
import AllContext from '@/store/AllContext'
import { useInView } from 'react-intersection-observer'
import { AboutMeBelow,AboutMeTop } from '@/utils/contants'

export default function About() {
  const {headerRendered,setActiveSection} = useContext(AllContext)
  const {ref,inView} = useInView()
  useEffect(()=>{
    if(inView){setActiveSection(prev=>[...prev,"About"])}
    else{setActiveSection(prev=>{
      const newlist =[]
      prev.map((item=>{
        if(item !== "About"){newlist.push(item)}
      }))
      return newlist
    })}
  },[inView,setActiveSection])
  return (
    <Fragment>
    {headerRendered && <section className='cont mt-8' ref={ref} id="About">
        <Header string={"Who Am I"}/>
        <div className='flex items-center flex-wrap'>
            <div className='w-full md:w-5/12 mb-2 md:mb-0'>
                <div className='h-[200px] w-[200px] rounded-full mx-auto md:ml-5 lg:ml-12 overflow-hidden'>
                    <div className='h-full w-full'>
                        <Image src={Bitmoji} alt="" style={{objectFit:"contain",height:"100%",width:"100%"} } priority/>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-7/12'>
                <span className='text-sm sm:text-base'>{AboutMeTop}</span>
                <br/>
                <span className='text-sm sm:text-base'>{AboutMeBelow}</span>
            </div>
        </div>
    </section>}
    </Fragment>

  )
}
