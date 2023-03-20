import React,{Fragment,useContext,useEffect} from 'react'
import Header from './Heading'
import AllContext from '@/store/AllContext'
import { useInView } from 'react-intersection-observer'
import { ProjctList } from '@/utils/contants'
import {FiExternalLink,FiGithub,FiFolder} from "react-icons/fi"
import { useAnimation,motion } from 'framer-motion'
import { projectChildren,projectMain } from '@/utils/xAnimation'

export default function Projects() {
  const {headerRendered,setActiveSection} = useContext(AllContext)
  const control = useAnimation()
  const {ref,inView} = useInView()
  useEffect(()=>{
    if(inView){
      control.start("animate")
      setActiveSection(prev=>[...prev,"Projects"])}
    else{setActiveSection(prev=>{
      const newlist =[]
      prev.map((item=>{
        if(item !== "Projects"){newlist.push(item)}
      }))
      return newlist
    })}
  },[inView])
  return(
    <Fragment>
      {headerRendered && <div className='mt-24 cont' id='Projects' ref={ref}>
          <Header string={"My Projects"}/>
          <motion.div className='flex flex-wrap' variants={projectMain} initial="initial" animate={control}>
            {ProjctList.map((item,key)=>{
              return(
              <motion.div className='w-full transition-all duration-150 hover:relative hover:scale-[102%] cont sm:w-6/12 mb-4 lg:w-4/12 px-2' key={key} variants={projectChildren}>
              <div className='p-3 bg-backdroplight rounded-md shadow-sm shadow-normal-text h-full min-h-[250px]'>
                  <div className='flex justify-between mb-4 items-center'>
                      <span className='text-3xl sm:text-4xl text-sundry'><FiFolder/></span>
                      <div className='flex'>
                        <span className={`text-xl ${item.link?"mr-4":""}`}><a href={item.repo}><FiGithub/></a></span>
                        {item.link && <span className='text-xl'>  <a href={item.link}><FiExternalLink/></a></span>}
                      </div>
                    </div>   
                    <div>
                        <h1 className='text-thick-text text sm:text-2xl mb-2'>{item.name}</h1>
                        <span className='text-base'>{item.description}</span>
                        <div className='flex'>
                          {item.language.map((item,key)=>{
                            <span className={`p-2 rounded-md border border-thick-text ${key!==0?"ml-3":""}`} key={key}>{item}</span>
                          })}
                  </div>
                </div>
                </div>
    
              </motion.div>)
            })}
  
          </motion.div>
        </div>}
    </Fragment>
  )
}
