import React, { Fragment, useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HeroAnimation,HeroChildrenAnimation,HeroLineAnimation } from '@/utils/xAnimation'
import { heroText } from '@/utils/contants'
import AllContext from '@/store/AllContext'
import { useInView } from 'react-intersection-observer'
import { ResumeLink } from '@/utils/contants'

export default function Hero() {
  const {setHeaderRenderd,headerRendered,setActiveSection} = useContext(AllContext)
  const {ref,inView} = useInView()
  const [windowWidth,setWindowWidth] = useState(null)
  useEffect(()=>{
    setWindowWidth(window.innerWidth)
    setHeaderRenderd(true)
  },[])
  useEffect(()=>{
    // if(inView){setActiveSection("")}
  },[inView])

  return (
    <Fragment>
    {headerRendered && <motion.section className='h-screen cont flex items-center' variants={HeroAnimation(windowWidth)} initial="initial" animate="animate" >
      <div className='flex mx-auto mt-8 md:mt-0' ref={ref}>
        <div>
          <motion.div className='w-[60px] h-full relative flex flex-col items-center overflow-hidden' variants={HeroLineAnimation(windowWidth)} initial="initial" animate="animate">
            <div>
              <div className=' h-[25px] w-[25px] rounded-full bg-dominant'></div>
            </div>
            <div className='h-full w-[5px] -mt-1 rounded-bl-[90%] rounded-br-[90%] heroline'></div>
          </motion.div>
        </div>
         <div>
          <motion.h1 variants ={HeroChildrenAnimation} className='text-sundry mb-2 text-xl pl-1'>Hi there,my name is</motion.h1>
          <motion.h1 variants ={HeroChildrenAnimation} className='text-thick-text text-[30px] leading-[48px] md:leading-[60px] font-[600] sm:text-[50px] md:text-[px] sm:leading-[48px]  mb-1'>Olusanya Ayomide</motion.h1>
          <motion.h1 className='text-normal-text text-[30px] leading-[30px] md:leading-[60px] font-[600] sm:text-[50px] sm:leading-[48px] md:text-[px]' variants ={HeroChildrenAnimation}> <span> I reimagine the web with one line of code</span><span className='md:whitespace-nowrap lg:block'> at a time</span>
        </motion.h1>
        <motion.h1  className='lg:w-[70%] mt-6' variants ={HeroChildrenAnimation}>{heroText}</motion.h1>
        <motion.button className='py-3 mt-6 block px-8 text-sundry border-sundry border rounded-[5px]' variants ={HeroChildrenAnimation}><a href={ResumeLink}>Resume</a></motion.button>
        </div>
      </div>
    </motion.section>}
    </Fragment>
  )
}
