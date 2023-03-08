import React from 'react'
import Image from 'next/image'
import Logo from "../public/MyLogo.png"
import { contacts } from '@/utils/contants'
import { motion } from 'framer-motion'
import { sideAnimation,sideAnimationChildren } from '@/utils/xAnimation'

export default function LeftSide() {

  const contactList = contacts.map((item,key)=>{
    return(
    <motion.button className='flex items-center justify-center w-full my-[40px]' key={key} variants={sideAnimationChildren}>
      <a href={item.link} target="_blank"><span className='text-normal-text  hover:text-sundry text-xl'>{item.icon}</span></a>
     </motion.button> 
    )

  })
  return (
    <motion.nav className='fixed h-screen left-0 top-0 pt-4 border-r border-normal-text hidden md:flex flex-col w-[60px] justify-between' initial="initial" animate="animate" variants={sideAnimation}>  
      <motion.div className='w-full h-[100px] hover:scale-125 transition-all duration-100' variants={sideAnimationChildren}>
        <Image src={Logo} alt="" style={{
          objectFit:"contain",height:"100%",width:"100%"
        }} priority></Image>
      </motion.div>
      <div>
          {contactList}
      </div>
    </motion.nav>
  )
}
