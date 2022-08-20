import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import GradientButton from '../../components/GradientButton'
import { navBarContext } from '../../components/NavBar'

const Campaign = () => {

  const { currentTab, setcurrentTab, setHide } = useContext(navBarContext)

  useEffect(() => {
    setHide(true)
  }, [])
  

  return (
    <div className='w-screen flex flex-col items-center justify-start h-screen bg-black box-border pt-[30%] sm:pt-0 lg:pt-[5%] scrollbar-hide'>
    <Head>
      <title>Campaign</title>
      <meta name="description" content="All campaigns" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <img src="/Assets/campaign.png" alt=""  className='w-[90%] h-[50%] mt-5 rounded-[20px]'/>
    <div className="w-[100%] h-auto flex flex-col items-center justify-start">
      <h1 className="text-white  text-[5.5vw] sm:text-[2vw] lg:text-[1.7vw] text-center font-bold font-Inter my-2">Need fund for cancer treatment</h1>
      <div className="w-[100%] h-[10vh] flex flex-col items-start justify-start px-7">
        <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw] ml-1">Campaign Title</span>
          <div className=" w-[100%] flex  items-center justify-start ">
            <input placeholder='Enter Amount' type="text" className="w-[70%] h-[15%] lg:h-[12%] min-h-[45px] bg-[#464646] rounded-[10px] my-[2%] px-3 placeholder:text-gray-500 focus:outline-none" />
            <GradientButton 
              title={'Donate'} 
              className={'w-[35%] h-[70%] bg-gradient-to-r from-[#DA29E4] to-[#05B5E6] ml-4'}
              onClick={null}
            />
          </div>
          
      </div>
    </div>
  </div>
  )
}
export default Campaign