import React from 'react'
import Image from 'next/image'
import Logo from "../public/MyLogo.png"
import { motion } from 'framer-motion'
import { BorderAnimation,Border,ImageAnimation } from '@/utils/xAnimation'


export default function Animate() {
  return (
    <div className='h-screen flex justify-center items-center'>
        <motion.div className='relative h-[170px] -rotate-[45deg] w-[170px]' variants={BorderAnimation} initial="initial" animate="animate">
            <motion.div  className='border-[16px] absolute inset-0 border-thick-text' variants={Border} initial="initial" animate="animate" ></motion.div>
            <motion.div className='absolute inset-0 flex items-center justify-center z-30' variants={ImageAnimation} initial="initials" animate="animates">
                <Image src={Logo} alt=""  className="h-[60%]"/>
            </motion.div>
            <div  initial="initial" animate="animate" className='absolute bg-bg-main w-[40px] bottom-1 -top-1 h-[120%] left-[38.2353%] z-10'></div>
            <div  initial="initial" animate="animate" className='absolute bg-bg-main h-[40px] w-[120%] -left-1 top-[38.2353%] z-10'></div>
        </motion.div>
    </div>

  )
}
