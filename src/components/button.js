import { useState } from "react"

const Button =({active,name,icon})=>{
    
    return(
        <button  className={`${ active ? 'bg-[#8692A6]' : 'bg-transparent active'} w-[212px] h-[64px] rounded-full flex items-center justify-center gap-4`}> 
          {icon}
          <span className={`${active ? 'text-[#ffffff]' : 'text-[#8692A6'} text-xl poppins-medium`}>
           {name}
          </span> 
        </button>
        
    )
}
 export default Button
