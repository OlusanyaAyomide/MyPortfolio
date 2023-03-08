import React, { Fragment, useContext } from 'react'
import RightSide from '@/components/RightSide' 
import LeftSide from '@/components/LeftSide'
import Hero from '@/components/Hero'
import About from '@/components/About'
import AllContext from '@/store/AllContext'
import TopNav from '@/components/TopNav'
import SideBar from '@/components/SideBar'
import { AnimatePresence } from 'framer-motion'
import Overlay from '@/components/Overlay'
import Toggler from '@/components/Toggler'
export default function index() {
  const {overlay,isnavActive} = useContext(AllContext)
  return (
    <Fragment>
      <TopNav/>
      {overlay && <Overlay/>}
      {isnavActive && <Toggler/>}
      <AnimatePresence>
      {isnavActive && <SideBar/>}
      </AnimatePresence>
     
      <LeftSide/>
      <div className='w-full md:px-[60px]'>
        <Hero/>
        <About/>
      </div>
      <RightSide/>
    </Fragment>
  )
}
