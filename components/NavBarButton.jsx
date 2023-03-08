import React,{useContext,useEffect,useState} from 'react'
import { toggleCenter,toggleAnimation } from '@/utils/xAnimation'
import AllContext from '@/store/AllContext'
import { motion,useAnimation } from 'framer-motion'

export default function NavbarButton() {
    const [mounted,setMounted] = useState(false)
   const {setOnOverlay,setisNavActive,isnavActive,overlay} = useContext(AllContext)
    const control = useAnimation()
 
    
    const handleChange = ()=>{
      setOnOverlay((prev=>!prev))
      setisNavActive((prev=>!prev))
    }

    useEffect(()=>{
      if (!mounted){
        setMounted(true)
        return}
        if(isnavActive){control.start("animate")}
        else{
          control.start("animateback")}
        
    },[isnavActive])
  return (
        <button className='flex flex-col justify-between h-[24px]  w-[30px] cursor-pointer' onClick={handleChange}>
            <motion.span className='toggler' variants={toggleAnimation(1)} initial="initial" animate={control}></motion.span>
            <motion.span className='toggler' variants={toggleCenter()} initial="initial" animate={control}></motion.span>
            <motion.span className='toggler' variants={toggleAnimation(3)} initial="initial" animate={control}></motion.span>
        </button>
  )
}
