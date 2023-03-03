import React, { useEffect, useState } from 'react'
import CampaignCard from './CampaignCard'
import { useRouter } from 'next/router';
import { getContract } from '../utils/helper-functions';
import { ethers } from 'ethers';
import dynamic from 'next/dynamic';

const Campaigns = () => {

   const [campaigns,setCampaigns] = useState([])
   const [loading,setLoading] = useState(false)


  const getCampaigns = async() => {
    try {
      setLoading(true)
    const { contract } = await getContract()
    const data = await contract.getCampaigns();
    const activeCampaigns = data.filter(item => item.state.toString() === "0");
    setCampaigns(activeCampaigns)
    setLoading(false)
    } catch (error) {
      setLoading(false)
    }

  }


  const listenToCampaigns = async() => {
    const { contract } = await getContract();
    contract.on("NewCampaign",() => {
      getCampaigns()
    })

  }

  const listenToCancel = async() => {
    const { contract } = await getContract();
    contract.on("Cancelled",() => {
      getCampaigns()
    })

  }

  useEffect(() => {
    getCampaigns()
    listenToCampaigns()
    listenToCancel()
    return () => {
      setCampaigns([])
    }
  },[])
  const router = useRouter();

  return (
    <div className={` grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 place-content-start lg:place-content-start  place-items-center w-[85%] gap-y-8 min-h-screen bg-black scrollbar-hide -mt-[30px] sm:pt-[5%] lg:pt-[1px]`}>
      {
        campaigns.map((item,i) => (
          <CampaignCard key={i} image={`https://gateway.ipfscdn.io/ipfs/${item?.image?.toString()}`} amount={ethers.utils.formatEther(item?.target?.toString()).toString()} title={item?.description?.toString()} date={'17/12/2022'} buttonTitle={'Go to Campaign'} onClick={() => router.push(`/campaigns/${item?.id?.toString()}`)}/>
        ))
      }
      {
        campaigns.length == 0&&<h1 className='fixed  top-1/2 left-[45%] m-auto text-white font-bold'>No Campaigns</h1>
      }
    </div>
  )
}

export default dynamic(() => Promise.resolve(Campaigns),{ssr:false});
