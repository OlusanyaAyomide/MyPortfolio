import React,{Fragment,useContext,useEffect} from 'react'
import Header from './Heading'
import AllContext from '@/store/AllContext'
import { useInView } from 'react-intersection-observer'
import { ExperienceList } from '@/utils/contants'
import { useAnimation,motion } from 'framer-motion'
import { ExperienceLine } from '@/utils/xAnimation'



export default function Experience() {
  const {headerRendered,setActiveSection} = useContext(AllContext)
  const control = useAnimation()
  const {ref,inView} = useInView()
  useEffect(()=>{
    if(inView){
      control.start("animate")
      setActiveSection(prev=>[...prev,"Experience"])}
    else{setActiveSection(prev=>{
      const newlist =[]
      prev.map((item=>{
        if(item !== "Experience"){newlist.push(item)}
      }))
      return newlist
    })}
  },[inView])
  return (
    <Fragment>
      {headerRendered && <div className='mt-24 cont' id="Experience" ref={ref}>
          <Header string={"Experience"}/>
          <div className='relative'>
            <motion.div variants={ExperienceLine} initial="initial" animate={control} className='absolute h-full top-0 w-[2px] bg-dominant left-[30px] md:left-[35px]'></motion.div>
            <div className='absolute top-0 left-[20px] h-[80px] w-[40px] z-10 bg-bg-main'></div>
            <div className='absolute bottom-0 left-[20px] h-[80px] w-[40px] z-10 bg-bg-main'></div>
            {ExperienceList.map((item,key)=>{
              return(
                <div className='flex relative my-6 items-center' key={key}>
                  <div className=''>
                    <div className='w-[60px] relative z-20 rounded-full border border-normal-text bg-backdrop text-sm flex items-center justify-center text-normal-text  h-[60px] sm:h-[70px] sm:w-[70px] sm:text-xl'>0{String(key+1)}</div>
                  </div>
                  <div className='w-full pl-2 md:pl-6'>
                    <div className='border-[1px] min-h-[120px] border-normal-text rounded-md p-4 py-6 md:pr-6 lg:pr-8'>
                      <h1 className='mb-2 text-base md:text-lg text-thick-text'>{item.heading}</h1>
                      <p className='text-normal-text text-sm md:text-base'>{item.text}</p>
                    </div>
                  </div>
                  <div className='absolute'>

                  </div>
                </div>
              )
            })}
          </div>
        </div>}
    </Fragment>
  )
}
