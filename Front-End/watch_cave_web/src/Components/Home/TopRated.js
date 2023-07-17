import React,{useState} from 'react'
import Titles from '../Titles'
import {BsBookmarkStarFill, BsChevronRight} from 'react-icons/bs'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import Movies from '../../Screens/Data/MovieData'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Ratings from './Ratings'
import {BsChevronLeft} from 'react-icons/bs'

function TopRated() {
  const [nextEl,setNextEL] = useState(null)
  const [prevEl,setPrevtEl] = useState(null)
  const classNames = "hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white"
  return (
    <div className="my-16">
      <Titles title='Top Rated' Icon={BsBookmarkStarFill} />
      <div className="mt-10">
        <Swiper 
        navigation={{nextEl,prevEl}} 
        slidesPerView={4} 
        spaceBetween={40} 
        autoPlay={true} 
        speed={1000} 
        loop={true} 
        modules={[Navigation,Autoplay]}
        >
          {
            Movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <div className="p-4 h-rate  border border-border bg-dry rounded-lg overflow-hidden">
                  <img src ={`Images/Movies/${movie.titleImage}`} alt={movie.name} className="w-full h-full object-cover rounded-lg"/>
                </div>
                <div className="px-4 flex-colo transition gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">
                  <button className="w-12 h-12 flex-colo transition hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white">
                    <FaHeart />
                  </button>
                  <Link className="font-semibold text-xl trancuted line-clamp-2 transition hover:text-subMain" to={`/movie/${movie.name}`}>
                    {movie.name}
                  </Link>
                  <div className="flex gap-2 text-star">
                    <Ratings value={movie.rate}/>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        {/* w-full px-1 flex-rows gap-6 pt-12 */}
        <div className="w-full px-1 flex-rows gap-6 pt-12">
          <button className={classNames} ref={(node) => setPrevtEl(node)}>
            <BsChevronLeft />
          </button>
          <button className={classNames} ref={(node) => setNextEL(node)}>
            <BsChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopRated