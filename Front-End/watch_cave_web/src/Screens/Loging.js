import React from 'react'
import Layout from "../Layout/Layout";
import { Link } from 'react-router-dom';

function Loging() {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
          <img src="/images/Logo.jpg" 
          alt="logo" 
          className="w-full h-12 object-contain">
          </img>
          <Input 
          label="Email" 
          placeholder="WatchCave@gmail.com" 
          type="email" 
          bg={true} >
          
          </Input>

          <Input 
          label="Password" 
          placeholder="********" 
          type="password" 
          bg={true} >
          
          </Input>

          <Link to="/dashbord" className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full">

            <FiLogIn/> Sign In
          
          </Link>
          <p className="text-center text-border">
            Don't have an account ?{" "}
            <Link to="/register" className="text-dryGray font-semibold ml-2"> 
            Sign Up
            </Link>

          </p>

        </div>

      </div>
    </Layout>
    <div>Loging</div>
  )
}

export default Loging