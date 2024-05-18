// import React from "react";
// import MainModal from "./MainModal";
// import{Input} from "../UsedInputs";
// import Uploder from "../Uploder";

// function CastsModal({modalOpen,setModelOpen,cast}){
//     return (

//         <MainModal modalOpen={modalOpen} setModalOpen={setModelOpen}>
//             <div className="inline-block sm:w4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white ">
//              <h2 className="text-3xl font-bold">{category ? "update Cast":"Create Cast"}</h2>   
//               <form className="flex flex-col gap-6 text-left mt-6">
             
//              <input
//               label="Cast Name"
//               placeholder={cast ? cast.fullName:"Jone Doe"}
//               type="text"
//               bg={false}
//              />
//                 <div className="flex flex-col gap-2">
//                 <p className="text-border font-semibold text-sm">
//                     Cast Image
//                     </p>   
//                     <Uploder/>
//                     <div className="w-32 h-32 p-2 bg-main border border-border rounded">
//                     <img src={'/images/${cast ? cast.image : "user.png"}'} 
//                     alt={cast?.fullName} 
//                     className="w-full object-cover rounded"/>
//                         </div>
//                         </div>

//              <button 
//              onClick={() => setModelOpen(false)}
//              className="w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-dry border-2 border-subMain rounded bg-subMain text-white">
                
//                 {category ? " update" : "Add"}                 
                  
                                  
                                
//              </button>
//               </form>
//             </div>
//         </MainModal>
//     )

// }
// export default CastsModal;
