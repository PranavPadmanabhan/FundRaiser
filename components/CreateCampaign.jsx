import React from 'react'
import GradientButton from './GradientButton'

const CreateCampaign = () => {
  return (
    <div className='w-[100%] h-[100%] flex flex-col sm:flex-row lg:flex-row items-center lg:items-start justify-center bg-black pt-0 sm:pt-0 lg:pt-0'>
        <div className="flex flex-col items-start justify-start w-[90%] lg:w-[45%] h-auto lg:h-[90%] pt-[2%] sm:pt-0 lg:pt-0 pl-3">
          <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw] ml-1">Campaign Title</span>
          <input placeholder='Add title' type="text" className="w-[90%] h-[15%] lg:h-[12%] min-h-[45px] bg-[#464646] rounded-[10px] my-[2%] px-3 placeholder:text-gray-500 focus:outline-none" />
          <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw] ml-1">Description</span>
          <input multiple={true} placeholder='Describe about your campaign' type="text" className="w-[90%] h-[40%] min-h-[60px] bg-[#464646] rounded-[10px] my-[2%] px-3 placeholder:text-gray-500 focus:outline-none" />
        </div>
        <div className="flex flex-col items-start justify-start w-[90%] lg:w-[45%] h-auto lg:h-[90%] pl-3">
            <div className="flex flex-col items-center justify-start w-[100%] h-auto ">
                <div className="flex flex-col items-start justify-center w-[100%]">
                    <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw]">Required Amount</span>
                    <input placeholder='Enter required amount' type="text" className="w-[90%] h-[15%] lg:h-[12%] min-h-[45px] lg:min-h-[55px] bg-[#464646] rounded-[10px] my-[2%] px-3 placeholder:text-gray-500 focus:outline-none" />
                </div>
                <div className="flex flex-col items-start justify-center w-[100%]">
                    <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw]">Choose Category</span>
                    <input type="text" className="w-[90%] h-[15%] lg:h-[12%] min-h-[45px] bg-[#464646] rounded-[10px] my-[2%] px-3 placeholder:text-gray-500 focus:outline-none" />
                </div>
                
            </div>
            <div className="relative w-[90%] flex items-center justify-start bg-[#424242] rounded-[10px] mt-[3%]">
                    <input type="file" name="" className='absolute z-1 opacity-0' />
                    <div className="flex items-center justify-center w-[35%] lg:w-[25%] min-h-[50px] bg-[#5B5B5B] rounded-[10px] mr-5">
                      <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw] ">Choose File</span>
                    </div>
                    <span className="text-[#FFFFFF] font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw] ">No file Choosen</span>
            </div>
            <GradientButton 
              title={'Start Compaign'} 
              className={' w-[90%] sm:w-[90%] lg:w-[90%] sm:h-[15%] lg:h-[5%] min-h-[45px] sm:min-h-[45px] lg:min-h-[50px] bg-gradient-to-r from-[#DA29E4] to-[#05B5E6] mt-3'}
              onClick={null}
            />
        </div>
    </div>
  )
}

export default CreateCampaign