import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import GradientButton from '../components/GradientButton'
import Modal from '../components/Modal'
import { navBarContext } from '../components/NavBar'
import styles from '../styles/Home.module.css'


export default function Home() {

  const router = useRouter()

  const { currentTab, setcurrentTab, setHide } = useContext(navBarContext)


  useEffect(() => {
    setHide(true)
  }, [])
  


  return (
    <div className='relative w-screen h-screen  flex flex-col items-start justify-start bg-black pt-[35%] sm:pt-[15%] lg:pt-[10%] box-border'>
      <Head>
        <title>FundRaiser</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
    <GradientButton 
        title={'Connect Wallet'} 
        className={'fixed z-[100] top-5  right-4 w-[35%] sm:w-[25%] lg:w-[18%] h-[5%] min-h-[35px] sm:min-h-[40px] bg-gradient-to-r from-[#DA29E4] to-[#05B5E6]'}
        onClick={null}
      />
   
     <img 
      src="/Assets/illustration.png" 
      alt="illustration" 
      className='fixed z-[1] right-0 bottom-0 min-w-[52%] min-h-[80%] sm:w-[80%] sm:h-[60%] lg:w-[45%] lg:h-[88%] '
     />
     <div className="flex  flex-col items-start w-[90%] justify-start  pl-[5%] lg:pl-[10%]">
        <p className={`${styles.text} text-white z-[100]  text-[12vw] sm:text-[8vw] lg:text-[5vw] font-Inter`}>Help us to <br />Help them...</p>
        <p className="text-white max-w-[85%] sm:max-w-[60%] lg:max-w-[55%] z-[100] text-left mt-1 font-Inter text-[3.7vw] sm:text-[2vw] lg:text-[1.5vw]">You have the power to turn this tearful world into a cheerful one.The question is, will you?</p>
        <div className="flex  flex-col sm:flex-row  w-[100%] h-auto mt-[5%] lg:mt-[3%]">
          <GradientButton onClick={() => router.push('campaigns')} title={'Start a campaign '} className="z-[100] w-[55%] sm:w-[25%] lg:w-[18%] h-[5%] min-h-[35px] sm:min-h-[40px] lg:min-h-[45px] bg-gradient-to-r from-[#DA29E4] to-[#05B5E6] font-semibold mr-0 sm:mr-[3%]" />
          <GradientButton title={'Donate Now '} className='z-[100] w-[40%] sm:w-[25%] lg:w-[12%] h-[5%] min-h-[35px] sm:min-h-[40px] lg:min-h-[45px] bg-gradient-to-r to-[#DA29E4] from-[#05B5E6] font-semibold mt-[5%] sm:mt-0'/>
        </div>
     </div>
     {/* <Modal/> */}
    </div>
  )
}
