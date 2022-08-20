import React from 'react'
import GradientButton from './GradientButton'

const CampaignCard = ({image,title, amount, date,onClick,buttonTitle}) => {
  return (
    <div className='flex items-center justify-center w-[25vw]  min-w-[300px]  h-[80%] min-h-[55vh] lg:min-h-[65vh] lg:max-w-[300px] rounded-[20px] bg-gradient-to-r from-[#DA29E4] to-[#05B5E6] p-[3px] mt-[20px]'>
        <div className="w-[100%] h-[100%] bg-[#151515] rounded-[17px] flex flex-col items-center justify-start p-[4px]">
            <img src={image} alt="" className="w-[100%] h-[55%] rounded-[13px] " />
            <h1 className="text-white my-1 text-[4vw] sm:text-[2vw] lg:text-[1.3vw] text-center font-bold font-Inter">{title}</h1>
            <div className="flex items-center justify-start w-[100%] h-[10%] my-1">
                <img src="/Assets/save-money.png" alt="" className="w-[10%]" />
                <span className="text-white ml-2 text-[3.2vw] sm:text-[2vw] lg:text-[1.1vw] text-center font-bold font-Inter">{amount}</span>
            </div>
            <div className="flex items-center justify-start w-[100%] h-[10%]">
                <img src="/Assets/calendar.png" alt="" className="w-[10%]" />
                <span className="text-white ml-2 text-[3.2vw] sm:text-[2vw] lg:text-[1.1vw] text-center font-bold font-Inter">{date}</span>
            </div>
            <GradientButton 
              title={buttonTitle} 
              className={' w-[90%] sm:w-[90%] lg:w-[90%] h-[5%] min-h-[40px] bg-gradient-to-r from-[#DA29E4] to-[#05B5E6] mt-3'}
              onClick={onClick}
            />
        </div>
    </div>
  )
}

export default CampaignCard