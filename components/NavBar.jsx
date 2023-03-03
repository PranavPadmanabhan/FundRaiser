import React, { useEffect, useState } from "react";
import GradientButton from "./GradientButton";

export const navBarContext = React.createContext();

const NavBarContextProvider = (props) => {
  const [currentTab, setcurrentTab] = useState("campaigns");
  const [hide, setHide] = useState(false);
  const value = {
    currentTab,
    setcurrentTab,
    setHide,
  };
  return (
    <navBarContext.Provider value={value}>
      <NavBar
        activeTab={currentTab}
        setcurrentTab={setcurrentTab}
        hide={hide}
      />
      {props.children}
    </navBarContext.Provider>
  );
};

const NavBar = ({ activeTab, setcurrentTab, hide }) => {
  return (
    <header
      className={` fixed flex z-[1000] top-0 bg-black items-center justify-center ${
        hide ? "lg:justify-end" : "lg:justify-between"
      } w-screen h-[15%] lg:h-[10%] pr-0 lg:pr-5 `}
    >
      <div
        className={`${
          hide ? "hidden" : "flex"
        } items-end sm:items-center lg:items-center justify-between ml-[330px]  lg:justify-evenly w-[95%] lg:w-[55%] h-[100%]`}
      >
        <div
          onClick={() => setcurrentTab("campaigns")}
          className=" relative flex flex-col items-center justify-center w-[30%] lg:w-[20%] h-[35%] lg:h-[100%] cursor-pointer"
        >
          <span className="text-white font-semibold">Campaigns</span>
          {activeTab == "campaigns" && (
            <div className="absolute bottom-0 w-[80%] h-[3px] rounded-[30px] bg-gradient-to-r from-[#DA29E4] to-[#05B5E6]"></div>
          )}
        </div>
        <div
          onClick={() => setcurrentTab("createCampaign")}
          className=" relative flex flex-col items-center justify-center w-[40%] lg:w-[20%] h-[35%] lg:h-[100%] cursor-pointer"
        >
          <span className="text-white whitespace-nowrap font-semibold">
            Create Campaign
          </span>
          {activeTab == "createCampaign" && (
            <div className="absolute bottom-0 w-[80%] h-[3px] rounded-[30px] bg-gradient-to-r from-[#DA29E4] to-[#05B5E6]"></div>
          )}
        </div>
        <div
          onClick={() => setcurrentTab("dashboard")}
          className=" relative flex flex-col items-center justify-center w-[30%] lg:w-[20%] h-[35%] lg:h-[100%] cursor-pointer"
        >
          <span className="text-white font-semibold   ">Dashboard</span>
          {activeTab == "dashboard" && (
            <div className="absolute bottom-0 w-[80%] h-[3px] rounded-[30px] bg-gradient-to-r from-[#DA29E4] to-[#05B5E6]"></div>
          )}
        </div>
      </div>
      <div
        className={
          "w-[35%] fixed top-1 right-1 lg:relative sm:w-[25%] lg:w-[15%] h-[5%] min-h-[35px] sm:min-h-[40px] "
        }
      >
        <GradientButton
          title={"Connect Wallet"}
          className={
            "w-[100%] fixed top-1 right-1 lg:relative sm:w-[25%] lg:w-[100%] h-[5%] min-h-[35px] sm:min-h-[40px] bg-gradient-to-r from-[#DA29E4] to-[#05B5E6]"
          }
          onClick={null}
        />
      </div>
    </header>
  );
};

export default NavBarContextProvider;
