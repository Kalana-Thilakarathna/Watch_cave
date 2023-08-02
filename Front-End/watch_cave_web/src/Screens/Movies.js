import React from 'react'
import Layout from '../Layout/Layout'
import Filters from '../Components/Filters'

function Movies() {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filters/>
      </div>
    </Layout>
  )
}

export default Movies