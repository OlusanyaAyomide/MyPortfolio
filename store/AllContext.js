import { createContext,useState } from "react";


const AllContext = createContext({
    activeSection:"",
    setActiveSection:function(){},
    headerRendered:true,
    setHeaderRenderd:function(){},
    isnavActive:false,
    setisNavActive:function(){},
    overlay:false,
    setOnOverlay:function(){},
})

export function AllContextProvider(props){
  const [activeSection,setActiveSection] = useState("")
  const [headerRendered,setHeaderRenderd] = useState(false)
  const [isnavActive,setisNavActive] = useState(false)
  const [overlay,setOnOverlay] = useState(false)

  const context = {
    activeSection,
    setActiveSection,
    headerRendered,
    setHeaderRenderd,
    isnavActive,
    setisNavActive,
    overlay,
    setOnOverlay
  }
  return <AllContext.Provider value={context}>{props.children}</AllContext.Provider>
} 


export default AllContext