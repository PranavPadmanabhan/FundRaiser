import { ethers } from "ethers";
import { ABI } from '../constants/constants'

export const getContract = async(signerRequired = false) => {
    const jsonRpcUrl = process.env.NEXT_PUBLIC_RPC_URL;
    const jsonRpcProvider = new ethers.providers.JsonRpcProvider(jsonRpcUrl);
    const address = process.env.NEXT_PUBLIC_ADDRESS;
    if(signerRequired){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer =  provider.getSigner()
        const contract = new ethers.Contract(address,ABI,signer)
        return { contract, provider}
    }
    else {
        const contract = new ethers.Contract(address,ABI,jsonRpcProvider);
        return {contract ,provider:jsonRpcProvider}
    }

}