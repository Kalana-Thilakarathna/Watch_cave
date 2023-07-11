import React from 'react'
import Layout from "../Layout/Layout";

function Loging() {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 flex-colo p-14 md:w-3/5 bg-dry rounded-lg border border-border">
          <img src="/images/Logo.jpg" 
          alt="logo" 
          className="w-full h-12 object-contain">
          </img>

        </div>

      </div>
    </Layout>
    <div>Loging</div>
  )
}

export default Loging