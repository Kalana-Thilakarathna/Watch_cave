import React from 'react'
import {FaCalendarAlt} from 'react-icons/fa'
import {GiSandsOfTime} from 'react-icons/gi'
import {BiCategoryAlt} from 'react-icons/bi'


function FlexMoviesItems({movie}) {
  return (
    <>
        <div className="flex items-center gap-2">
          <BiCategoryAlt className="text-subMain w-3 h-3" />
            <span className="text-sm font-medium">{movie.category}</span>
        </div>
        <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-subMain w-3 h-3" />
            <span className="text-sm font-medium">{movie.year}</span>
        </div><div className="flex items-center gap-2">
            <GiSandsOfTime className="text-subMain w-3 h-3" />
            <span className="text-sm font-medium">{movie.time}</span>
        </div>
    </>
  )
}

export default FlexMoviesItems ;