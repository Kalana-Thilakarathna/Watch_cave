import React from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import Movies from '../Screens/Data/MovieData'
import { useState } from 'react'

function SingleMovie() {
  const[modalOpen,setModalOpen] = useState(false);
  const {id} = useParams()
  const movie = Movies.find((movie) => movie.name === id)
  return (
    <Layout>
      <ShareMovieModal 
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        movie={movie}
        />
        <movieInfo movie={movie}setModalOpen={setModalOpen}/>
      <h1>{movie?.name}</h1>
    </Layout>
  )
}

export default SingleMovie