import React from 'react'
import Layout from '../Layout/Layout'
import Filters from '../Components/Filters'
import {Movies} from '../Screens/Data/MovieData'
import Movie from '../Components/Movie'
import { useState } from 'react'
import { CgSpinner } from 'react-icons/cg'

function MoviesPage() {
  const maxpage =10
  const [page,setPage] = useState(maxpage)
  const HandleLoadingMore = () => {
    setPage(page+maxpage)
  }
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filters/>
        <p className="text-lg font-medium my-6">
          Total <span className="font-bold text-subMain">{Movies?.length}</span>{' '} items found
        </p>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {
            Movies.slice(0,page)?.map((movie,index) => (
              <Movie movie={movie} key={index}/>
            ))
          }
        </div>
        {/* Loading more*/}
        <div className="w-full flex-colo md:my-10 my-20">
          <button onClick={HandleLoadingMore} className="flex flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain content-center">
            Loading More <CgSpinner className="animate-spin relative top-1" />
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default MoviesPage