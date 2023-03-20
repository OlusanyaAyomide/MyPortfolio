import React, { useContext } from 'react'
import { motion,useAnimation } from 'framer-motion'
import { NavBarMotion } from '@/utils/xAnimation'
import { navsections,contacts } from '@/utils/contants'
import { HeroChildrenAnimation } from '@/utils/xAnimation'
import { Link } from 'react-scroll'
import AllContext from '@/store/AllContext'

export default function SideBar() {
  const {setOnOverlay,setisNavActive} = useContext(AllContext)
  const handleClick = ()=>{
    setOnOverlay(false)
    setisNavActive(false)
  }
  return (
    <motion.section className='fixed z-40 md:hidden w-10/12 sm:w-8/12 items-center pb-12 h-screen bg-bg-main flex' variants={NavBarMotion} initial="initial" animate="animate" exit="animateback">
      <div className='flex flex-col items-center w-full'>
        {navsections.map((item,key)=>{
          return <Link to={`${item}`} duration={500} smooth={true} offset={-80}><motion.button variants={HeroChildrenAnimation} className='my-3 text-4xl uppercase tracking-wide text-thick-text font-bold stroke' key={key} onClick={handleClick}>{item}</motion.button></Link>
        })}
        <motion.div className='mt-20 w-full flex items-center justify-evenly px-16' variants={HeroChildrenAnimation} >
          {contacts.map((item,key)=>{
            return <a href={item.link} key={key}><span className='text-2xl sm:text-3xl text-thick-text stroke'>{item.icon}</span></a>
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
