import React,{Fragment,useContext,useEffect, useState} from 'react'
import Header from './Heading'
import AllContext from '@/store/AllContext'
import { useInView } from 'react-intersection-observer'
import { useFetch } from './useFetch'


export default function ContactMe() {
  const {ref,inView} = useInView()
  const {headerRendered,setActiveSection} = useContext(AllContext)
  const [email,setemail] = useState("")
  const [message,setbody] = useState("")
  const onSuccess = ()=>{setemail("");setbody("")}
  const {mutate,isLoading,isSuccess,isError } = useFetch(onSuccess)
  const handleSubmit = (e)=>{
    e.preventDefault()
    mutate({email,message})
  }

  useEffect(()=>{
    if(inView){
      setActiveSection(prev=>[...prev,"Contact"])}
    else{setActiveSection(prev=>{
      const newlist =[]
      prev.map((item=>{
        if(item !== "Contact"){newlist.push(item)}
      }))
      return newlist
    })}
  },[inView])
  return (
    <Fragment>
      {headerRendered &&
        <div className='mt-16 cont' ref={ref} id="Contact">
        <Header string={"Contact Me"}/>
        <div className='flex flex-wrap lg:flex-nowrap lg:items-center'>
        <form className='w-full max-w-[450px] py-8  px-6 border-normal-text shadow-sm shadow-thick-text bg-backdroplight rounded-lg' onSubmit={handleSubmit}>
            <h1 className='text-lg sm:text-xl text-thick-text font-semibold '>Send Me A Mail</h1>
            <div className='mb-2'>
              <label className='block font-semibold mb-1 text-base sm:text-lg'>Email</label>
              <input type="email" className='w-full px-4 font-[500]  bg-normal-text py-1 text-[#222121] outline-none border-normal-text rounded-md' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            </div>
            <div className='mb-2'>
              <label className='block font-semibold mb-2 text-base sm:text-lg'>Body</label>
              <textarea className='text-[#222121] font-[500] w-full bg-normal-text h-[130px] px-4 py-2 outline-none border-normal-text rounded-md' value={message} onChange={(e)=>{setbody(e.target.value)}}></textarea>
            </div>
            <div className='mt-4 flex justify-center'>
                {!isLoading&& <button className='rounded-md border-sundry  text-lg border text-sundry py-1 px-6'>{isSuccess?"Sent":isError?"Try Again":"Send"}</button>}
                {isLoading && <button className='rounded-md border-sundry  text-lg border text-sundry py-1 px-7'>
                  <div className='h-[28px]  w-[28px] border-2 border-sundry rounded-full border-t-0 border-r-0 animate-spin duration-400'></div>
                </button>}
            </div>
          </form>
            <div className='w-full h-[50px] mt-24 lg:mt-0 lg:mb-12'>
              <div className='w-full '>
              <h1 className='text-[40px] sm:text-[50px] font-bold text-center sm:text-left lg:text-center md:text-[60px] lg:text-[60px] text-sundry'>Get In Touch</h1>
              <h1 className='text-normal-text mt-6 text-lg text-center sm:text-left lg:text-center'>Click the links on the side bar </h1>
              </div>
             
          </div>
        </div>

  
        </div>}
    </Fragment>
  )
}

//
