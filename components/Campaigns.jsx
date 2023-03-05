import React, { useEffect, useState } from 'react'
import CampaignCard from './CampaignCard'
import { useRouter } from 'next/router';
import { getContract } from '../utils/helper-functions';
import { ethers } from 'ethers';
import dynamic from 'next/dynamic';
import { ImSpinner2 } from 'react-icons/im';

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-start lg:place-content-start  place-items-center w-[85%] gap-y-8 min-h-screen bg-black scrollbar-hide -mt-[30px] sm:pt-[5%] lg:pt-[1px]">
      {
        campaigns.map((item,i) => {
          const date = new Date(parseInt(item?.deadline?.toString()))
          return (
            <CampaignCard key={i} image={`https://gateway.ipfscdn.io/ipfs/${item?.image?.toString()}`} amount={ethers.utils.formatEther(item?.target?.toString()).toString()} title={item?.description?.toString()} date={`${date.getDate()<10?"0"+date.getDate():date.getDate()}/${date.getMonth()<10?"0"+date.getMonth():date.getMonth()}/${date.getFullYear()}`} buttonTitle={'Go to Campaign'} onClick={() => router.push(`/campaigns/${item?.id?.toString()}`)}/>
          )
        })
      }
      {
        campaigns.length == 0&&<h1 className='fixed  top-1/2 left-[45%] m-auto text-white font-bold'>No Campaigns</h1>
      }
       {
        loading && (
          <div className="fixed left-0 top-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] text-white backdrop-blur-[20px] flex items-center justify-center">
             <div className="relative w-full h-full rounded-[15px] flex flex-col items-center justify-center">
              <ImSpinner2 size={70} color="white" className="animate-rotate " />
              <h1 className="mt-2 text-white text-[25px]">Loading...</h1>
             </div>
          </div>
        )
      }
    </div>
  )
}

export default dynamic(() => Promise.resolve(Campaigns),{ssr:false});
