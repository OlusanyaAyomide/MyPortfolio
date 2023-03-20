import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Toggler() {
    const [moved,setMoved] = useState(false)
    const animations ={
        initial:{
            opacity:0,
        },
        animate:{
            opacity:1,
            transition:{
                delay:0.3
            }
        }
    }
  return (
    <motion.div className='md:hidden fixed top-[25px] flex items-center justify-start px-[2px] p-1 left-20 w-[42px] h-[25px] bg-thick-text rounded-full z-40' variants={animations} initial="initial" animate="animate">
        <div className={`h-[18px] relative bottom-[1px] w-[18px] shadow-md shadow-bg-main rounded-full transition-all duration-200 cursor-pointer bg-normal-text ${moved?"translate-x-[18px]":""}`} onClick={()=>setMoved((prev=>!prev))}>
        </div>
    </motion.div>
  )
}
