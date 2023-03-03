import React from 'react'
import GradientButton from './GradientButton'

const CreateCampaign = () => {
  // const button = document.getElementById("options-menu");
  // const menu = document.querySelector(".origin-top-right");

 
  // button.addEventListener("click", () => {
  //   if (menu.style.display === "none") {
  //     menu.style.display = "block";
  //     button.setAttribute("aria-expanded", "true");
  //   } else {
  //     menu.style.display = "none";
  //     button.setAttribute("aria-expanded", "false");
  //   }
  // });
  

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
          className="w-[70%] h-[40%] min-h-[60px] bg-[#464646] rounded-[10px] my-[2%] p-3 placeholder:text-[#FFFFFF] focus:outline-none"
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
          <div className="flex flex-col items-start justify-center w-[100%]">
            <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw]">
              Choose Category
            </span>
            <input
              placeholder="Treatment"
              type="text"
              className="w-[85%] h-[15%] lg:h-[12%] min-h-[45px]  lg:min-h-[55px] bg-[#464646] rounded-[10px] my-[2%] px-3 placeholder:text-[#FFFFFF] focus:outline-none"
            />
          </div>
        </div>

        <span className="text-white text-[1.3vw] font-bold">Choose File</span>
        {/*<div
          class="w-[83%] h-[13%] flex flex-row items-center rounded-[10px] justify-between  px-4 py-2 text-white bg-[#464646]  cursor-pointer hover:bg-blue-600"
        >
          <span>-Select a file-</span>
       <select   className="w-full h-full " />
          <IoIosArrowDown size={22} />

  </div>*/}

  <div class="relative inline-block text-left">
  <button class="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="button" id="options-menu" aria-expanded="true" aria-haspopup="true">
    
    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
  </button>
  <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
    <div class="py-1" role="none">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Edit</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Duplicate</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Archive</a>
    </div>
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

export default CreateCampaign;

export default CreateCampaign