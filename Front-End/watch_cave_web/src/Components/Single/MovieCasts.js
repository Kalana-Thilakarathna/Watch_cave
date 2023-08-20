// import React from 'react'
// import { FaUserFriends } from 'react-icons/fa'
// import Titles from '../Titles'
// import { Autoplay } from 'swiper'
// import {Swiper, SwiperSlide} from 'swiper/react'
// import {UsersData} from '../../Screens/Data/MovieData'

// function MovieCasts() {
//   return (
//     <div className="my-12">
//         <Titles Titles = "casts" Icon={FaUserFriends}/>
//         <div className="mt-10">
//           <Swiper autoplay={{
//             delay:1000,
//             disableOnInteraction:false,
//           }} loop={true} speed={1000} module={[Autoplay]}
//           spaceBetween = {10}
//           breakpoints={{
//             0:{
//               slidesPerView: 1,
//               },
//             400:{
//               slidesPerView: 2,
//               },
//             768:{
//               slidesPerView: 3,
//               },
//             1024: {
//                 slidesPerView: 4,
//                 },
//             1280: {
//                 slidesPerView: 5,
//               },
//           }}>
//             {
//               <SwiperSlide key = {i}>
//                 <div className="w-full p-3 italic text-xs Itext-text rounded flex-colo bg-dry border border-gray-800">
//                   <img src={`/Images/${user.image}`} alt={user.name} className="w-full h-64 object-cover rounded mb-2"/>
//                 </div>
//               </SwiperSlide>
//             }
//           </Swiper>
//         </div>
//     </div>
//   )
// }

// export default MovieCasts