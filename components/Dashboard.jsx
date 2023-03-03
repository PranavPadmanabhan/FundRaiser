import React from 'react'
import CampaignCard from './CampaignCard'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-1 gap-y-8 sm:grid-cols-2  lg:grid-cols-3 place-content-start lg:place-content-center place-items-center w-[85%] min-h-screen bg-black scrollbar-hide pt-[20%] sm:pt-[5%] lg:pt-[24%]'>
        <CampaignCard image={'/Assets/campaign.png'} amount={'100 Matic'} title={'Need fund for Cancer treatment'} date={'17/12/2022'}  buttonTitle={'Close Campaign'} onClick={null}/>
        <CampaignCard image={'/Assets/campaign.png'} amount={'100 Matic'} title={'Need fund for Cancer treatment'} date={'17/12/2022'}  buttonTitle={'Close Campaign'} onClick={null}/>
        <CampaignCard image={'/Assets/campaign.png'} amount={'100 Matic'} title={'Need fund for Cancer treatment'} date={'17/12/2022'}  buttonTitle={'Close Campaign'} onClick={null}/>
        <CampaignCard image={'/Assets/campaign.png'} amount={'100 Matic'} title={'Need fund for Cancer treatment'} date={'17/12/2022'}  buttonTitle={'Close Campaign'} onClick={null}/>
    </div>
  )
}

export default Dashboard