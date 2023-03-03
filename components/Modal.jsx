import react from "react";
import bank from "../public/Assets/bank.jpg"

function Modal(){
    return( 
        <div className="w-[100vw] h-[100vh] fixed top-0 bg-transparent z-[1000] flex flex-col items-center justify-center ">
         <div className="w-[50%] h-[50%] flex flex-col items-center justify-center bg-white rounded-[20px] ">
        
            <div className="w-[90%] h-[30%]  flex flex-col items-center justify-center text-black text-[50px] font-semibold">
                Transaction Initiated
            </div>
            <div className="w-[80%] h-[5%] rounded-[20px] bg-white border border-black">
                <div className="w-[20%] h-[100%] bg-blue-600 rounded-[20px]"></div>
            </div>
            
            <div className="w-[80%] h-[5%] flex flex-row items-start justify-between rounded-[20px] text-black">
<h1>Waiting For Response</h1>
<h1>Waiting For Response</h1>
<h1>Waiting For Response</h1>

            </div>
         </div>

        </div>
    )
}

export default Modal