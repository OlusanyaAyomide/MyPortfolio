import AllContext from '@/store/AllContext'
import React, { useContext } from 'react'
import { navsections } from '@/utils/contants'
import { motion } from 'framer-motion'
import { sideAnimation,sideAnimationChildren } from '@/utils/xAnimation'
import {Link} from "react-scroll"

export default function RightSide() {
  const {activeSection} = useContext(AllContext)
  const navItems = navsections.map((item,key)=>{
    return(
      <motion.button className={`rotate-90 text-lg hover:text-xl hover:text-sundry transition-all duration-200 ${activeSection.includes(item)?"text-sundry":""}`} key={key} variants={sideAnimationChildren}><Link offset={-50} to={`${item}`} duration={500} smooth={true}>{item}</Link></motion.button>
    )
  })
  return (
    <motion.nav className='fixed right-0 top-0 h-screen py-4 border-l border-normal-text hidden md:flex flex-col w-[60px]' initial="initial" animate="animate" variants={sideAnimation}>
      <div className='h-full flex flex-col justify-around'>
        {navItems}
      </div>
         

    </motion.nav>
  )
}
