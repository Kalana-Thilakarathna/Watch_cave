import React from 'react'
import {MdDelete} from 'react-icons/md'
import {FaEdit} from 'react-icons/fa'
import UsersData from '../../Data/MovieData'
import { Input } from '../../../Components/UsedInputs'
import SideBar from '../SideBar'
import Uploder from '../../../Components/Uploder'
import { Message, Select } from '../../../Components/UsedInputs'
import { CategoriesData } from '../../Data/CategoriesData'
import {imUpload} from 'react-icons/im'



function AddMovies() {
  return (
    <SideBar>
        <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold">Create Movie</h2>
            <div className="w-full grid md:grid-cols-2 gap-6">
            <Input 
             label="Movie title" 
             placeholder="game of throns" 
             type="text" 
             bg={true} > 
             </Input>

            <Input 
             label="Hours" 
             placeholder="2hr" 
             type="text" 
             bg={true} >
            </Input>
            </div>

            <div className="w-full grid md:grid-cols-2 gap-6">
            <Input 
             label="Language used" 
             placeholder="English" 
             type="text" 
             bg={true} > 
             </Input>

            <Input 
             label="Year of release" 
             placeholder="2022" 
             type="number" 
             bg={true} >
            </Input>
            </div>

            {/* IMAGES*/}
            <div className="w-full grid md:grid-cols-2 gap-6">
            {/* img without title*/}
            <div className="flex flex-col gap-2">
                <p className="text-border font-semibold text-sm">
                    Image Without Title</p>   
                    <Uploder/>
                    <div className="w-32 h-32 p-2 bg-main border border-border rounded">
                    <img src="/images/movies/99.jpg" alt="" className="w-full object-cover rounded"/>
                        </div>
                        </div>
                        {/* image with title*/}
                        <div className="flex flex-col gap-2">
                <p className="text-border font-semibold text-sm">
                    Image With Title</p>   
                    <Uploder/>
                    <div className="w-32 h-32 p-2 bg-main border border-border rounded">
                    <img src="/images/movies/88.jpg" alt="" className="w-full object-cover rounded"/>
                        </div>
                        </div>
                        </div>
                        {/* DESCRIPTION*/}
                        <Message label=" Movie Description" placeholder="Make it short and sweet"/>
                        {/*CATEGORY*/}
                        <div className="text-sm w-full">
                            <Select label="Movie Category" options={CategoriesData}/>
                            </div>
                          {/*Movie video*/}
                          <div className="flex flex-col gap-2 w-full">
                <label className="text-border font-semibold text-sm">
                    Movie video</label>   
                    <Uploder/>
                    </div>
                    {/*CASTS*/}
                    <div className=" w-full grid lg:grid-cols-2 gap-6 items-start">
                      <button className="w-full py-4 bg-main border border-submain border-dashed text-white rounded">
                        Add cast
                        </button>
                        <div className=" grid 2xl:grid-cols-4-lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4 ">
                            {UsersData.map((user,i) =>(
                             <div key={i} 
                             className="p-2 italic text-xs text-text rounded flex-colo bg-main border border-border">
                              <img 
                              src={`/Images/Movies/${user.image ? user.image : 'user.png'}`}
                               alt={user.fullName} 
                               className="w-full h-24 object-cover rounded mb-2"/> 
                               <p>{user.fullName}</p>
                               <div className="flex-rows mt-2 w-full gap-2">
                                <button className="w-6 h-6 flex-colo  bg-dry border border-border border dashed text-subMain rounded">
                                  <MdDelete/>  
                                </button>
                                <button className="w-6 h-6 flex-colo  bg-dry border border-border border dashed text-green-600 rounded">
                                  <FaEdit/>  
                                  </button>
                                </div> 
                                </div>  
                            ))}                               
                           
                            </div>  
                           </div>
                           {/*submit */}


                <button className="bg-subMain w-full flex-rows gap-6 font-medium text-white pay-4  rounded">
               <imUpload/> Publish Movie
                </button>

            </div>
        
    </SideBar>
    
  );
}

export default AddMovies;