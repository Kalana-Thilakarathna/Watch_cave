import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import Titles from '../Titles'

function MovieCasts() {
  return (
    <div className="my-12">
        <Titles Titles = "casts" Icon={FaUserFriends}/>
    </div>
  )
}

export default MovieCasts