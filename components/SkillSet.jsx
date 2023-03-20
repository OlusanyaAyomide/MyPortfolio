import React,{Fragment,useContext,useEffect} from 'react'
import Header from './Heading'
import AllContext from '@/store/AllContext'
import { useInView } from 'react-intersection-observer'
import { skillSet } from '@/utils/contants'
import Image from 'next/image'
import { useAnimation,motion } from 'framer-motion'
import { fadeIn,rollin } from '@/utils/xAnimation'

export default function SkillSet() {
    const {headerRendered,setActiveSection} = useContext(AllContext)
    const {ref,inView} = useInView()
    const control = useAnimation()
    useEffect(()=>{
      if(inView){
        control.start("animate") 
        setActiveSection(prev=>[...prev,"Skills"])}
      else{setActiveSection(prev=>{
        const newlist =[]
        prev.map((item=>{
          if(item !== "Skills"){newlist.push(item)}
        }))
        return newlist
      })}
    },[inView,control,setActiveSection])
  return (
    <Fragment>
      {headerRendered && <section className='mt-24 ' ref={ref} id="Skills">
       <Header string={"My Skill Set"}/>
       <motion.div className='flex flex-wrap md:w-[650px] sm:max-w-[650px] sm:mx-auto md:mx-0' variants={fadeIn} initial="initial" animate={control}>
        {skillSet.map((item,key)=>{
          return(
          <motion.div className='mx-4 h-[45px] w-[45px] sm:h-[55px] mb-4 transition-all duration-300  hover:scale-50 cursor-pointer sm:w-[55px] bg-thick-text rounded-full p-1 sm:p-2 my-shadow shadow-thick-text hover:relative' key={key} variants={rollin}>
            {<Image src={item} alt="" style={{objectFit:"contain",height:"100%",width:"100%"}}/>}
          </motion.div>)
        })}
       </motion.div>
    </section>}
    </Fragment>

  )
}
