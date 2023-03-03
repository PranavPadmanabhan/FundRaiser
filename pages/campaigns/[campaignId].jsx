/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { ethers } from "ethers";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import GradientButton from "../../components/GradientButton";
import NavBarContextProvider, { navBarContext } from "../../components/NavBar";
import { useAppContext } from "../../contexts/appContext";
import { getContract } from "../../utils/helper-functions";

const Campaign = ({ campaignId }) => {
  const { setNavBarHidden } = useAppContext();

  const [campaign, setCampaign] = useState({});
  const [loading, setLoading] = useState(false);
  const [donations, setDonations] = useState([]);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const { address, isConnected } = useAccount();

  const getCampaign = async () => {
    try {
      setLoading(true);
      const { contract } = await getContract();
      const data = await contract.getCampaign(campaignId);
      const allDonation = await contract.getDonation(campaignId);
      setCampaign(campaign);
      setDonations(allDonation);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const donate = async () => {
    if (address && amount !== "" && parseFloat(amount) >= 0.0001) {
      try {
        setLoading(true);
        const { contract } = await getContract(true);
        const tx = await contract.donate(campaignId, {
          value: ethers.utils.parseEther(amount),
        });
        const receipt = await tx.wait(1);
        if (receipt) {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    }
  };

  const cancel = async () => {
    if (address) {
      try {
        setLoading(true);
        const { contract } = await getContract(true);
        const tx = await contract.cancelCampaign(campaignId);
        const receipt = await tx.wait(1);
        if (receipt) {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    }
  };

  const listenToDonations = async() => {
    const { contract } = await getContract();
    contract.on("NewDonation",() => {
      getCampaign()
    })

  }


  const listenToCancel = async() => {
    const { contract } = await getContract();
    contract.on("Cancelled",() => {
      getCampaign()
    })

  }

  const listenToWithdraw = async() => {
    const { contract } = await getContract();
    contract.on("Withdraw",() => {
      getCampaign()
    })

  }

  const withdraw = async () => {
    if (address) {
      try {
        setLoading(true);
        const { contract } = await getContract(true);
        const tx = await contract.withdrawFunds(campaignId);
        const receipt = await tx.wait(1);
        if (receipt) {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getCampaign();
    listenToDonations();
    listenToCancel()
    listenToWithdraw()
    return () => {
      setCampaign({});
      setDonations([]);
    };
  }, []);

  useEffect(() => {
    setNavBarHidden(true);
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
            {campaign?.description?.toString()}
          </h1>
          <div className="w-[100%] h-[100%] flex flex-col items-center justify-start   ">
            {isConnected &&
            address?.toLowerCase() ===
              campaign?.creator?.toString().toLowerCase() ? (
              <div className="w-[90%] h-[20%] flex items-start justify-start px-7 mt-[40px] -ml-[50px] ">
                <GradientButton
                  title={"Cancel"}
                  className={
                    "w-[45%] h-[40px]  bg-gradient-to-r from-[#DA29E4] to-[#05B5E6] mt-2 ml-4 mr-3"
                  }
                  onClick={cancel}
                />
                <GradientButton
                  title={"Withdraw"}
                  className={
                    "w-[45%] h-[40px]  bg-gradient-to-r from-[#DA29E4] to-[#05B5E6] mt-2 ml-4"
                  }
                  onClick={withdraw}
                />
              </div>
            ) : (
              <div className="w-[90%] h-[20%] flex flex-col items-start justify-start px-7 mt-[40px] -ml-[50px] ">
                <span className="text-white font-semibold text-[4vw] sm:text-[2vw] lg:text-[1.3vw]">
                  Enter Amount to Donate
                </span>
                <div className=" w-[100%] flex  items-start justify-start ">
                  <div className="h-auto w-1/2 flex flex-col items-start ">
                    <input
                      placeholder="Enter Amount"
                      type="text"
                      value={amount}
                      onChange={(e) => {
                        setAmount(e.target.value);
                        if (parseFloat(e.target.value)) {
                          if (parseFloat(e.target.value) < 0.0001) {
                            setError("minimum amount is 0.0001 ether");
                          } else {
                            setError("");
                          }
                        } else {
                          setError("Invalid amount");
                        }
                      }}
                      className="w-[100%] text-white h-[40px] lg:h-[12%] min-h-[45px] bg-[#464646] rounded-[10px] my-[2%] px-3 placeholder:text-gray-500 focus:outline-none"
                    />
                    {error !== "" && (
                      <span className=" text-red-700 text-[12px] font-bold ml-2">
                        {error}
                      </span>
                    )}
                  </div>
                  <GradientButton
                    title={"Donate"}
                    className={
                      "w-[25%] h-[40px]  bg-gradient-to-r from-[#DA29E4] to-[#05B5E6] mt-2 ml-4"
                    }
                    onClick={donate}
                  />
                </div>
              </div>
            )}
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
                      {campaign.target
                        ? ethers.utils.formatEther(campaign?.target?.toString())
                        : "0.00"}{" "}
                      ETH
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
                      {campaign.balance
                        ? ethers.utils.formatEther(
                            campaign?.balance?.toString()
                          )
                        : "0.00"}{" "}
                      ETH
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[90%] h-[55%] flex flex-row items-center justify-center mt-[10px]  ">
              <div className="relative w-[98%] h-[100%] flex flex-col items-center justify-start  ">
                <span className="text-white font-semibold text-[4vw] sm:text-[2vw] lg:text-[1.3vw] mb-2">
                  Recieved Donations
                </span>
                <div className=" w-[100%] min-h-[200px] bg-[#5B5B5B] rounded-[20px] flex flex-col items-center justify-start overflow-y-scroll scrollbar-hide">
                  {donations.map((item, i) => (
                    <div
                      key={i}
                      className=" w-[90%] h-[50px] bg-[#464646] rounded-[10px] my-2 flex flex-row items-center justify-between px-[20px] "
                    >
                      <h1 className="font-Inter text-white">{`0x..${item?.donator
                        .toString()
                        .slice(
                          item?.donator.toString().length - 10,
                          item?.donator.toString().length
                        )}`}</h1>
                      <h1 className="font-Inter text-white">
                        {item?.amount
                          ? ethers.utils.formatEther(item?.amount?.toString())
                          : null}
                      </h1>
                    </div>
                  ))}
                  {donations.length === 0 && (
                    <h1 className="absolute top-1/2 left-[40%] text-white font-bold">
                      No Donations yet
                    </h1>
                  )}
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
export default dynamic(() => Promise.resolve(Campaign),{ssr:false});

export const getServerSideProps = async (context) => {
  const { campaignId } = context.params;
  return {
    props: {
      campaignId: parseInt(campaignId.toString()),
    },
  };
};
