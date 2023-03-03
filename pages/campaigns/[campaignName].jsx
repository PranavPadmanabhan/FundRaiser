import Head from "next/head";
import React, { useContext, useEffect } from "react";
import GradientButton from "../../components/GradientButton";
import NavBarContextProvider, { navBarContext } from "../../components/NavBar";

const Campaign = () => {
  const { currentTab, setcurrentTab, setHide } = useContext(navBarContext);

  useEffect(() => {
    setHide(true);
  }, []);

  return (
    <div className="w-screen  flex flex-col sm:flex-row lg:flex-row items-center justify-start h-screen bg-black box-border  sm:pt-0 lg:pt-[5%] scrollbar-hide">
      <Head>
        <title>Campaign</title>
        <meta name="description" content="All campaigns" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarContextProvider />
      <div className="w-[100%] h-[100%] p-[40px] flex flex-row items-center justify-center">
        <img
          src="/Assets/campaign.png"
          alt=""
          className="w-[35%] h-[100%]  rounded-[20px]"
        />
        <div className="w-[50%] h-[100%] flex flex-col items-center justify-start ">
          <h1 className="text-white  text-[5.5vw] sm:text-[2vw] lg:text-[1.7vw] text-center font-bold font-Inter my-2">
            Need fund for cancer treatment
          </h1>
          <div className="w-[100%] h-[100%] flex flex-col items-center justify-start   ">
            <div className="w-[90%] h-[20%] flex flex-col items-start justify-start px-7 mt-[40px] -ml-[50px] ">
              <span className="text-white font-semibold text-[4vw] sm:text-[2vw] lg:text-[1.3vw]">
                Enter Amount to Donate
              </span>
              <div className=" w-[100%] flex  items-center justify-center ">
                <input
                  placeholder="Enter Amount"
                  type="text"
                  className="w-[75%] h-[20%] lg:h-[12%] min-h-[45px] bg-[#464646] rounded-[10px] my-[2%] px-3 placeholder:text-gray-500 focus:outline-none"
                />
                <GradientButton
                  title={"Donate"}
                  className={
                    "w-[25%] h-[55%]  bg-gradient-to-r from-[#DA29E4] to-[#05B5E6] ml-4"
                  }
                  onClick={null}
                />
              </div>
            </div>
            <div className="w-[90%] h-[25%] flex flex-row items-center justify-between mt-[10px]   ">
              <div className="w-[48%] h-[100%] flex flex-col items-start justify-start    ">
                <span className="text-white font-semibold text-[4vw] sm:text-[2vw] lg:text-[1.3vw]">
                  Required Amount
                </span>
                <div className=" w-[100%] flex flex-col  items-center justify-center ">
                  <button
                    className={
                      "w-[100%] min-h-[70px] rounded-[20px] flex flex-col items-center justify-center  bg-gradient-to-r from-[#DA29E4] to-[#05B5E6]  text-white font-Inter p-[2px]"
                    }
                    onClick={null}
                  >
                    
                    <div className="w-[100%] h-[100%] rounded-[18px] flex flex-col items-center justify-center bg-[#5B5B5B] text-[30px] font-semibold">
                    100Matic
                    </div>
                  </button>
                </div>
              </div>
              <div className="w-[48%] h-[100%] flex flex-col items-start justify-start ">
                <span className="text-white font-semibold text-[4vw] sm:text-[2vw] lg:text-[1.3vw]">
                  Recieved Amount
                </span>
                <div className=" w-[100%] flex  items-center justify-start ">
                <button
                    className={
                      "w-[100%] min-h-[70px] rounded-[20px] flex flex-col items-center justify-center  bg-gradient-to-r from-[#DA29E4] to-[#05B5E6]  text-white font-Inter p-[2px]"
                    }
                    onClick={null}
                  >
                    
                    <div className="w-[100%] h-[70px] rounded-[18px] flex flex-col items-center justify-center bg-[#5B5B5B] text-[30px] font-semibold">
                    10Matic
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[90%] h-[55%] flex flex-row items-center justify-between mt-[10px]  ">
              <div className="w-[48%] h-[100%] flex flex-col items-start justify-start   ">
                <span className="text-white font-semibold text-[4vw] sm:text-[2vw] lg:text-[1.3vw]">
                  Required Amount
                </span>
                <div className=" w-[100%] min-h-[200px] rounded-[20px] flex flex-col bg-[#5B5B5B] items-center justify-around ">
                <div className=" w-[90%] h-[50px] bg-[#464646] rounded-[10px] flex flex-row items-center justify-between px-[20px] ">
                    <h1 className="font-Inter text-white">557\axa</h1>
                    <h1 className="font-Inter text-white">0.2Matic</h1>
                  </div>
                  <div className=" w-[90%] h-[50px] bg-[#464646] rounded-[10px] flex flex-row items-center justify-between px-[20px] ">
                    <h1 className="font-Inter text-white">557\axa</h1>
                    <h1 className="font-Inter text-white">0.2Matic</h1>
                  </div> <div className=" w-[90%] h-[50px] bg-[#464646] rounded-[10px] flex flex-row items-center justify-between px-[20px] ">
                    <h1 className="font-Inter text-white">557\axa</h1>
                    <h1 className="font-Inter text-white">0.2Matic</h1>
                  </div>
                </div>
              </div>
              <div className="w-[48%] h-[100%] flex flex-col items-start justify-start  ">
                <span className="text-white font-semibold text-[4vw] sm:text-[2vw] lg:text-[1.3vw]">
                  Recieved Amount
                </span>
                <div className=" w-[100%] min-h-[200px] bg-[#5B5B5B] rounded-[20px] flex flex-col items-center justify-around ">
                  <div className=" w-[90%] h-[50px] bg-[#464646] rounded-[10px] flex flex-row items-center justify-between px-[20px] ">
                    <h1 className="font-Inter text-white">557\axa</h1>
                    <h1 className="font-Inter text-white">0.2Matic</h1>
                  </div>
                  <div className=" w-[90%] h-[50px] bg-[#464646] rounded-[10px] flex flex-row items-center justify-between px-[20px] ">
                    <h1 className="font-Inter text-white">557\axa</h1>
                    <h1 className="font-Inter text-white">0.2Matic</h1>
                  </div>{" "}
                  <div className=" w-[90%] h-[50px] bg-[#464646] rounded-[10px] flex flex-row items-center justify-between px-[20px] ">
                    <h1 className="font-Inter text-white">557\axa</h1>
                    <h1 className="font-Inter text-white">0.2Matic</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-[100%] flex items-center justify-center px-2">
        <div className="flex flex-col w-[45%] items-start justify-start">
          <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw] ml-1">Required Amount</span>
          <div className="flex items-center justify-center w-[90%] h-[15%] lg:h-[12%] min-h-[45px] bg-[#464646] rounded-[10px] my-[2%] px-3 placeholder:text-gray-500" >100 Matic</div>
        </div>
        <div className="flex flex-col w-[45%] items-start justify-start">
          <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw] ml-1">Recieved Amount</span>
          <div className="flex items-center justify-center w-[90%] h-[15%] lg:h-[12%] min-h-[45px] bg-[#464646] rounded-[10px] my-[2%] px-3 placeholder:text-gray-500 " >10 Matic</div>
        </div>
      </div> */}
        </div>
      </div>
    </div>
  );
};
export default Campaign;
