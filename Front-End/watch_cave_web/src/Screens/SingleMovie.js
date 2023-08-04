import React from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import Movies from '../Screens/Data/MovieData'

function SingleMovie() {
  const {id} = useParams()
  const movie = Movies.find((movie) => movie.name === id)
  return (
    <Layout>
      <h1>{movie?.name}</h1>
    </Layout>
  )
}

export default SingleMovie