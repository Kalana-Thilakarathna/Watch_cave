import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import Titles from '../Titles'
import Swiper, { Autoplay } from 'swiper'

function MovieCasts() {
  return (
    <div className="my-12">
        <Titles Titles = "casts" Icon={FaUserFriends}/>
        <div className="mt-10">
          <Sw autoplay={{
            delay:1000,
            disableOnInteraction:false,
          }} loop={true} speed={1000} module={[Autoplay]}
          breakpoints={{
            0:{
              slidesPerView: 1,
              spaceBetween: 10,
              },
            400:{
              slidesPerView: 2,
              spaceBetween: 10,
              },
            768:{
              slidesPerView: 3,
              spaceBetween: 10,
              }
          }}
        </div>
    </div>
  )
}

export default MovieCasts