import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import Campaigns from '../../components/Campaigns'
import CreateCampaign from '../../components/CreateCampaign'
import { navBarContext } from '../../components/NavBar'
import Dashboard from '../../components/Dashboard';
import { useAppContext } from '../../contexts/appContext'

const Index = () => {

  const { currentTab, setcurrentTab, setHide } = useContext(navBarContext)
  const { setNavBarHidden } = useAppContext();

  const RenderTabs = () => {
      if(currentTab == 'createCampaign'){
        return (<CreateCampaign />)
      }
      else if(currentTab == 'campaigns'){
        return (<Campaigns />)
      }
      else if(currentTab == 'dashboard'){
        return (<Dashboard />)
      }
  }

  useEffect(() => {
    setNavBarHidden(false);
  }, []);


  useEffect(() => {
    setHide(false)
  }, [])
  

 

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-start bg-black box-border overflow-x-hidden pt-[10%] sm:pt-[15%] lg:pt-[10%] scrollbar-hide'>
      <Head>
        <title>Campaigns</title>
        <meta name="description" content="All campaigns" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RenderTabs />
    </div>
  )
}

export default Index