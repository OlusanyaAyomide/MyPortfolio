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
import SkillSet from '@/components/SkillSet'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import {  useTimeOut } from '@/components/useFetch'
import Animate from '@/components/Animate'


export default function index() {
  const {overlay,isnavActive} = useContext(AllContext)
  const {val} = useTimeOut(3000)
  return (
    <Fragment>
      {val && <>
      <TopNav/>
      {overlay && <Overlay/>}
      {isnavActive && <Toggler/>}
      <AnimatePresence>
      {isnavActive && <SideBar/>}
      </AnimatePresence>
      <LeftSide/>
      <div className='w-full md:px-[60px] pb-28'>
        <Hero/>
        <About/>
        <SkillSet/>
        <Experience/>
        <Projects/>
        <ContactMe/>
      </div>
      <RightSide/>
      </>}
      {!val && <Animate/>}
    </Fragment>
  )
}
