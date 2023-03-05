import dynamic from "next/dynamic";
import React, { useState } from "react";
import GradientButton from "./GradientButton";
import { IoIosArrowDown } from "react-icons/io";
import { useStorageUpload } from "@thirdweb-dev/react";
import { useAccount } from "wagmi";
import { getContract } from "../utils/helper-functions";
import { useAppContext } from "../contexts/appContext";
import { ImSpinner10, ImSpinner2, ImSpinner9 } from "react-icons/im";
import { ethers } from "ethers";
import { useRouter } from "next/router";

const CreateCampaign = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [target, setTarget] = useState("");
  const [file, setFile] = useState({});
  const [fileName, setFileName] = useState(null);
  const [imageHash, setImageHash] = useState("");
  const [category, setCategory] = useState("");
  const [uploadingRate, setUploadingRate] = useState(0);
  const { address } = useAccount();
  const router = useRouter()

  const { mutateAsync: upload, isLoading, isSuccess } = useStorageUpload();

  const createCampaign = async () => {
    if (address && name !== "" && description !== "" && imageHash !== ""  ) {
      try {
        setLoading(true);
        const data = date.split("/",date.length)
        const time = new Date(`${data[2]}-${data[1]<10?"0"+data[1]:data[1]}-${data[0]<10?"0"+data[0]:data[0]}`)
        const { contract } = await getContract(true);
        const tx = await contract.createCampaign(name,description,ethers.utils.parseEther(target),imageHash,time.getTime());
        const receipt = await tx.wait(1);
        if (receipt) {
          setLoading(false);
          setcurrentTab("campaigns"); 
          router.push("/campaigns")
        }
      } catch (error) {
        setLoading(false);
      }
    }
    else {
      alert("every fields are required")
    }
  };

  const uploadFile = async () => {
    if (file) {
      const uploadedData = await upload({
        data: [file],
        options: {
          onProgress: (e) => {
            setUploadingRate(Math.round((e.progress / e.total) * 100))
          },
          uploadWithGatewayUrl: true,
          uploadWithoutDirectory: true,
        },
      });
      setImageHash(
        uploadedData[0].slice(
          uploadedData[0].length - 46,
          uploadedData[0].length
        )
      );
    } else {
      alert("Select one file");
    }
  };

  return (
    <div className="w-[100%] h-[100%] flex flex-col sm:flex-row lg:flex-row items-center lg:items-start justify-center bg-black pt-0 sm:pt-0 lg:pt-0">
      <div className="flex flex-col items-start justify-start w-[90%] lg:w-[35%] h-auto lg:h-[90%] pt-[2%] sm:pt-0 lg:pt-0 pl-3 ">
        <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw] ml-1">
          Campaign Title
        </span>
        <input
          placeholder="Add title"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-[70%] text-white h-[15%] lg:h-[12%] min-h-[45px] bg-[#464646] rounded-[10px] my-[2%] px-3 placeholder:text-[#FFFFFF] focus:outline-none"
        />
        <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw] ml-1">
          Deadline
        </span>
        <input
          placeholder="eg: 17/10/2023"
          type="text"
          value={date}
          onChange={(e) => {
            setDate(e.target.value)
          }}
          className="w-[70%] text-white h-[15%] lg:h-[12%] min-h-[45px] bg-[#464646] rounded-[10px] my-[2%] px-3 placeholder:text-[#FFFFFF] focus:outline-none"
        />
        <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw] ml-1">
          Description
        </span>
        <textarea
          style={{ resize: "none" }}
          onChange={(e) => setDescription(e.target.value)}
          multiple={true}
          value={description}
          placeholder="Describe about your campaign"
          type="text"
          className="w-[70%] text-white max-h-[130px] h-[45%] min-h-[60px] bg-[#464646] rounded-[10px] my-[2%] p-3 placeholder:text-[#FFFFFF] focus:outline-none"
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
              value={target}
              onChange={(e) => {
                setTarget(e.target.value);
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
              className="w-[85%] h-[15%] text-white lg:h-[12%] min-h-[45px] lg:min-h-[55px] bg-[#464646] rounded-[10px] my-[2%] px-3 placeholder:text-[#FFFFFF] focus:outline-none"
            />
            {error !== "" && (
              <span className="text-[12px] font-bold text-red-600 ">
                {error}
              </span>
            )}
          </div>
          <div className="flex flex-col items-start justify-start w-[100%] h-[100px]  ">
            <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw] mb-2 ">
              Choose Category
            </span>

            <select
              onChange={(e) => setCategory(e.target.value)}
              id="countries"
              className="bg-[#5B5B5B] border border-gray-300   text-gray-900 text-sm rounded-lg focus:ring-blue-500 min-h-[55%] focus:border-blue-500 block w-[83%] p-2.5 dark:bg-[#424242] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>-Select Category-</option>
              <option value="treatment">For Treatment</option>
              <option value="communitied">For Communities</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <span className="text-white font-bold text-[4vw] sm:text-[2vw] lg:text-[1.3vw] mt-3">
          Choose File
        </span>
        <div className="w-[83%] max-h-[50px] h-[13%] flex relative items-start  rounded-[12px] mt-2 justify-between  bg-[#424242]  text-white  cursor-pointer ">
          <input
            className="  absolute opacity-0 top-0 left-0 border-2 border-neutral-900 h-[100%] w-[30%] z-100"
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
                setFileName(e.target.files[0].name);
              } else {
                setFileName(null);
              }
            }}
          />

          <div className="h-[100%] w-[30%] bg-[#5B5B5B] flex items-center justify-center rounded-[12px]  ">
            Choose file
          </div>
          <div className="h-[100%] w-[70%] items-center flex justify-start px-3 box-border ">
            {" "}
            {fileName ?? "No file choosen"}
          </div>
        </div>

        <GradientButton
          isLoading={isLoading}
          title={"Upload File"}
          className={
            " w-[83%] sm:w-[90%] lg:w-[83%] sm:h-[15%] lg:h-[5%] min-h-[45px] sm:min-h-[45px] lg:min-h-[50px] font-semibold bg-gradient-to-r from-[#DA29E4] to-[#05B5E6] mt-10"
          }
          onClick={uploadFile}
        />
        <GradientButton
          title={"Start Compaign"}
          className={
            " w-[83%] sm:w-[90%] lg:w-[83%] sm:h-[15%] lg:h-[5%] min-h-[45px] sm:min-h-[45px] lg:min-h-[50px] font-semibold bg-gradient-to-r from-[#DA29E4] to-[#05B5E6] mt-5"
          }
          onClick={createCampaign}
        />
      </div>
      {
        isLoading && (
          <div className="fixed top-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] text-white backdrop-blur-[20px] flex items-center justify-center">
             <div className="relative w-[35vw] h-[27vh] rounded-[15px] border-[1px] border-[rgba(255,255,255,0.5)] flex flex-col items-center justify-center">
              <ImSpinner2 size={100} color="white" className="animate-rotate " />
              <span className="absolute top-[30%] text-white font-bold text-[20px]">{uploadingRate}%</span>
              <h1 className="mt-2 text-white text-[25px]">Uploading...</h1>
             </div>
          </div>
        )
      }
      {
        loading && (
          <div className="fixed top-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] text-white backdrop-blur-[20px] flex items-center justify-center">
             <div className="relative w-[35vw] h-[27vh] rounded-[15px] border-[1px] border-[rgba(255,255,255,0.5)] flex flex-col items-center justify-center">
              <ImSpinner2 size={90} color="white" className="animate-rotate " />
              <h1 className="mt-2 text-white text-[25px]">Loading...</h1>
             </div>
          </div>
        )
      }
    </div>
  );
};

export default dynamic(() => Promise.resolve(CreateCampaign), { ssr: false });
