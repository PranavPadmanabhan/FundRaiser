import dynamic from "next/dynamic";
import React from "react";
import GradientButton from "./GradientButton";
import { IoIosArrowDown } from "react-icons/io";

const CreateCampaign = () => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col sm:flex-row lg:flex-row items-center lg:items-start justify-center bg-black pt-0 sm:pt-0 lg:pt-0">
      <div className="flex flex-col items-start justify-start w-[90%] lg:w-[35%] h-auto lg:h-[90%] pt-[2%] sm:pt-0 lg:pt-0 pl-3 ">
        <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw] ml-1">
          Campaign Title
        </span>
        <input
          placeholder="Add title"
          type="text"
          className="w-[70%] h-[15%] lg:h-[12%] min-h-[45px] bg-[#464646] rounded-[10px] my-[2%] px-3 placeholder:text-[#FFFFFF] focus:outline-none"
        />
        <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw] ml-1">
          Description
        </span>
        <textarea
          multiple={true}
          placeholder="Describe about your campaign"
          type="text"
          className="w-[70%] h-[45%] min-h-[60px] bg-[#464646] rounded-[10px] my-[2%] p-3 placeholder:text-[#FFFFFF] focus:outline-none"
        />
      </div>
      <div className="flex flex-col items-start justify-start w-[90%] lg:w-[45%] h-auto lg:h-[90%] pl-3 ">
        <div className="flex flex-row items-center justify-start w-[90%] h-auto ">
          <div className="flex flex-col items-start justify-center w-[100%] ">
            <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw]">
              Required Amount
            </span>
            <input
              placeholder="Enter required amount"
              type="text"
              className="w-[85%] h-[15%] lg:h-[12%] min-h-[45px] lg:min-h-[55px] bg-[#464646] rounded-[10px] my-[2%] px-3 placeholder:text-[#FFFFFF] focus:outline-none"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-[100%] h-[100px]  ">
            <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw] mb-2 ">
              Choose Category
            </span>

            <select
              id="countries"
              class="bg-[#5B5B5B] border border-gray-300   text-gray-900 text-sm rounded-lg focus:ring-blue-500 min-h-[55%] focus:border-blue-500 block w-[83%] p-2.5 dark:bg-[#424242] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>-Select File-</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
        <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw] mt-3">
          Choose File
        </span>
        <div class="w-[83%] h-[13%] flex relative items-start  rounded-[12px] mt-2 justify-between  bg-[#424242]  text-white  cursor-pointer ">
          <input
            className="  absolute opacity-0 top-0 left-0 border-2 border-neutral-900 h-[100%] w-[30%] z-100"
            type="file"
            accept="image/*"
            onChange={(e) => handleSubmit(e, "image")}
          />

          <div className="h-[100%] w-[30%] bg-[#5B5B5B] flex items-center justify-center rounded-[12px]  ">
            Choose file
          </div>
          <div className="h-[100%] w-[70%] items-center flex justify-start px-3 box-border ">
            {" "}
            No file choosen
          </div>
        </div>

        <GradientButton
          title={"Upload File"}
          className={
            " w-[83%] sm:w-[90%] lg:w-[83%] sm:h-[15%] lg:h-[5%] min-h-[45px] sm:min-h-[45px] lg:min-h-[50px] font-semibold bg-gradient-to-r from-[#DA29E4] to-[#05B5E6] mt-10"
          }
          onClick={null}
        />
        <GradientButton
          title={"Start Compaign"}
          className={
            " w-[83%] sm:w-[90%] lg:w-[83%] sm:h-[15%] lg:h-[5%] min-h-[45px] sm:min-h-[45px] lg:min-h-[50px] font-semibold bg-gradient-to-r from-[#DA29E4] to-[#05B5E6] mt-5"
          }
          onClick={null}
        />
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(CreateCampaign), { ssr: false });
