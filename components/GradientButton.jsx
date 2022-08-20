import React from 'react'

const GradientButton = ({className,title, onClick}) => {
  return (
    <div onClick={onClick} className={`${className}  rounded-[10px] flex items-center justify-center p-[2px] cursor-pointer`}>
        <div className="w-[100%] h-[100%]  flex items-center justify-center bg-black rounded-[8px] text-white text-[3.7vw] sm:text-[2vw] lg:text-[1.2vw]">
            { title}
        </div>
    </div>
  )
}

export default GradientButton