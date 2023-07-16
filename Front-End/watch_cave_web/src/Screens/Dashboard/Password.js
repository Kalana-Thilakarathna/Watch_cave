import React from 'react'
import SideBar from './SideBar'

function Password() {
  return (
    <SideBar>
        <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold">Profile</h2>
            <Uploder/>
            <Input 
             label="Previous Password" 
             placeholder="***********" 
             type="password" 
             bg={true} > 
             </Input>

            <Input 
             label="New Password" 
             placeholder="***********" 
             type="passwrd" 
             bg={true} >
            </Input>

            <Input 
             label="COnfirm Password" 
             placeholder="***********" 
             type="passwrd" 
             bg={true} >
            </Input>

            <div className="flex justify-end items-center my-4">
                <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white pay-3 px-6 rounded w-full sm:w-auto">
                Change Password
                </button>

            </div>
        </div>
    </SideBar>
    
  )
}

export default Password