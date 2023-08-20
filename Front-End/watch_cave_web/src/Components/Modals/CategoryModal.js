import React from "react";
import MainModal from "./MainModal";
import{Input} from "../UsedInputs";


function CategoryModal({modalOpen,setModelOpen,category}){
    return (

        <MainModal modalOpen={modalOpen} setModalOpen={setModelOpen}>
            <div className="inline-block sm:w4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white ">
             <h2 className="text-3xl font-bold">{category ? "update":"Create"}</h2>   
              <form className="flex flex-col gap-6 text-left mt-6">
             
             <input
              label="Category Name"
              placeholder={category ? category.title:"Actions"}
              type="text"
              bg={false}

             />

             <button 
             onClick={() => setModelOpen(false)}
             className="w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-dry border-2 border-subMain rounded bg-subMain text-white">
                
                {category ? " update" : "Add"}                 
                  
                                  
                                
             </button>
              </form>
            </div>
        </MainModal>
    )

}
export default CategoryModal;
