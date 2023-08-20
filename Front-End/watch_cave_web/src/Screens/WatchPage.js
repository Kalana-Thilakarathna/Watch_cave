import React from 'react'
import Layout from '../Layout/Layout'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Movies from '../Screens/Data/MovieData'
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'
import {FaCloudDownloadAlt, FaHeart, FaPlay} from 'react-icons/fa'

function WatchPage() {
  let {id} = useParams()
  const movie = Movies.find((movie) => movie.name===id)
  const [play,setPlay] = useState(false)
  return (
    <Layout>
      <div className="container mx-auto bg-dry p-6 mb-12">
        <div className="flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6">
          <Link to={`/movie/${movie?.name}`} className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray hover:text-subMain transitions">
            <BsFillArrowLeftSquareFill/>{movie?.name}
          </Link>
          <div className="flex-btn sm:w-auto w-full gap-5">
            <button className="bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm">
              <FaHeart/>
            </button>  
            <button className="flex bg-subMain flex-row gap-2 hover:text-main transitions text-white rounded px-8 font-medium py-3 text-sm">
              <FaCloudDownloadAlt /> Download 
            </button>     
          </div>
        </div>
        {/* watch video */}
        {
          play ? (
            <video className="h-full w-full rounded" controls autoPlay={play}>
              <source src="/Images/movie.mp4" type="video/mp4" title={movie?.name}/>
            </video>
          ):(
            <div className="w-full h-screen rounded-lg overflow-hidden relative">
              <div className="absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex flex-colo">
                <button onClick={() => setPlay (true)} className=" bg-white text-subMain flex-colo border border-subMain rounded-full w-20 h-20 font-medium text-xl">
                  <FaPlay/>
                </button>
              </div>
              <img src={movie?.image ? `/Images/Movies/${movie.image}`: "Images/user.png"} alt={movie.name} className="w-full h-full object-cover rounded-lg"/>
            </div>
          )
        }
      </div>
    </Layout>
  )
}

export default WatchPage