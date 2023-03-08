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
    if(inView){setActiveSection("About")}
  },[inView])
  return (
    <Fragment>
    {headerRendered && <section className='cont mt-8' ref={ref}>
        <Header/>
        <div className='flex items-center flex-wrap'>
            <div className='w-full md:w-5/12 mb-2 md:mb-0'>
                <div className='h-[200px] w-[200px] rounded-full mx-auto md:ml-5 overflow-hidden'>
                    <div className='h-full w-full'>
                        <Image src={Bitmoji} alt="" style={{objectFit:"contain",height:"100%",width:"100%"} } priority/>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-7/12'>
                <span>{AboutMeTop}</span>
                <br/>
                <span>{AboutMeBelow}</span>
            </div>
        </div>
    </section>}
    </Fragment>

  )
}
