import React from 'react'
import CampaignCard from './CampaignCard'
import { useRouter } from 'next/router';

const Campaigns = () => {

  const router = useRouter();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 place-content-start lg:place-content-start  place-items-center w-[85%] gap-y-8 min-h-screen bg-black scrollbar-hide -mt-[30px] sm:pt-[5%] lg:pt-[1px]'>
        <CampaignCard image={'/Assets/campaign.png'} amount={'100 Matic'} title={'Need fund for Cancer treatment'} date={'17/12/2022'} buttonTitle={'Go to Campaign'} onClick={() => router.push('/campaigns/1')}/>
        <CampaignCard image={'/Assets/campaign.png'} amount={'100 Matic'} title={'Need fund for Cancer treatment'} date={'17/12/2022'} buttonTitle={'Go to Campaign'} onClick={null}/>
        <CampaignCard image={'/Assets/campaign.png'} amount={'100 Matic'} title={'Need fund for Cancer treatment'} date={'17/12/2022'} buttonTitle={'Go to Campaign'} onClick={null}/>
        <CampaignCard image={'/Assets/campaign.png'} amount={'100 Matic'} title={'Need fund for Cancer treatment'} date={'17/12/2022'} buttonTitle={'Go to Campaign'} onClick={null}/>
    </div>
  )
}

export default Campaigns