import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import { navBarContext } from '../../components/NavBar'

const Campaign = () => {

  const { currentTab, setcurrentTab, setHide } = useContext(navBarContext)

  useEffect(() => {
    setHide(true)
  }, [])
  

  return (
    <div className='w-screen h-screen bg-black box-border pt-[28%] sm:pt-0 lg:pt-[5%] scrollbar-hide'>
    <Head>
      <title>Campaign</title>
      <meta name="description" content="All campaigns" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1 className="text-white ">Hello World</h1>
  </div>
  )
}
export default Campaign