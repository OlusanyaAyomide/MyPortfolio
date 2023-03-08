import React from 'react'
import { motion,useAnimation } from 'framer-motion'
import { NavBarMotion } from '@/utils/xAnimation'
import { navsections } from '@/utils/contants'


export default function SideBar() {
    const control = useAnimation()
  return (
    <motion.section className='fixed z-10 md:hidden w-10/12 sm:w-8/12 h-screen bg-bg-main flex' variants={NavBarMotion} initial="initial" animate="animate" exit="animateback">
    </motion.section>
  )
}
