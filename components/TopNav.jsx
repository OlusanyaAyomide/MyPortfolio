import React from 'react'
import NavbarButton from './NavBarButton'
import Image from 'next/image'
import Logo from "../public/MyLogo.png"
import { TopNavMotion } from '@/utils/xAnimation'
import { motion } from 'framer-motion'

export default function TopNav() {
  return (
   <motion.section className='fixed z-30 md:hidden bg-bg-trans top-0 px-6 w-full flex justify-between items-center' variants={TopNavMotion} initial="initial" animate="animate">
    <NavbarButton/>
    <div>
        <div className='h-[65px] w-[65px]'>
            <Image src={Logo} alt="" style={{
          objectFit:"contain",height:"100%",width:"100%"
        }} priority/>
        </div>
    </div>
   </motion.section>
  )
}
