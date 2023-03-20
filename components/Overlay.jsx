import AllContext from '@/store/AllContext'
import React, { useContext } from 'react'

export default function Overlay() {
  const {setOnOverlay,setisNavActive} = useContext(AllContext)
  return (
    <div onClick={()=>{
      setOnOverlay(false)
      setisNavActive(false)
    }} className='fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40'></div>
  )
}
