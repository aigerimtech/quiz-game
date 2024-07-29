
const ButtonStartQuiz = ({header})=>{


    return(
        <div className="ml-[600px] mt-[3px] ">
           <button className='w-[212px] h-[64px] bg-[#8692A6] rounded-full ' >
             <span className='text-xl text-[#ffffff] poppins-semibold'>{header}</span>
           </button>
        </div>
        
    )
}

export default ButtonStartQuiz