import React from 'react'
import Titles from '../Titles'
import { BiSolidBookmarkAlt } from 'react-icons/bi'
import { useState } from 'react'
import {Message, Select} from '../UsedInputs'
import Stars from '../Home/Ratings'
import UserData from '../../Screens/Data/UserData'

function MovieRates({movie}) {
  const Ratings =[
    {
      title: "0 - Poor",
      value: 0,
    },
    {
      title: "1 - Fair",
      value: 1,
    },
    {
      title: "2 - Good",
      value: 2,
    },
    {
      title: "3 - Very Good",
      value: 3,
    },
    {
      title: "4 - Excellent",
      value: 4,
    },
    {
      title: "5 - Masterpiece",
      value: 5,
    }
  ]

  const [rating, setRating] = useState(0)
  return (
    <div className="my-12">
      <Titles title="Reviews" Icon={BiSolidBookmarkAlt} />
      <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 □bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded">
        {/* wrtie review */}
        <div className="xl: col-span-2 w-full flex flex-col gap-8">
          <h3 className="text-xl text-black font-semibold">
            Reviews "{movie?.name}"
          </h3>
          <p className="text-sm leading-7 font-medium text-black">
          Write a review for this movie. It will be posted on this page
          </p>
          <div className="text-sm w-full">
            <Select label="Select Ratings" options={Ratings} onChange={(e) => setRating(e.target.value)}/>
            <div className="flex flex-row mt-4 text-lg gap-2 text-star">
              <Stars value={rating} />
            </div>
          </div>
          {/* message */}
          <Message label="Message" placeholder="write something short and sweet"/>
          {/* BUTTON */}
          <button className="bg-subMain text-white py-3 w-full flex flex-colo rounded">
            SUBMIT
          </button>
          {/* reviews */}
      </div>
          <div className="col-span-3 flex flex-colo gap-6">
            <h3 className="texr-xl text-text font-semibold">Reviews (56) </h3>
            <div className="w-full flex flex-col Obg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll">
              {UserData.map((user,i) => (
                <div className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg">
                  <div className="col-span-2 Obg-main hidden md:block">
                    <img
                      src={`/images/${user ? user. image : "user. jpg"}`}
                      alt={user. FullName}
                      className="w-full h-24 rounded-(g object-cover"
                    />
                  </div>
                  <div className="col-span-7 flex flex-col gap-2">
                    <h2>{user?. FullName}</h2>
                    <p className="text-xs leading-6 font-medium text-text">
                      {user?.Message}
                    </p>
                  </div>
                  <div className="col-span-3 flex flex-rows border- l Oborder-border text-s gap-1 text-star">
                    <Stars value={user.Rate}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

    </div>
  )
}

export default MovieRates