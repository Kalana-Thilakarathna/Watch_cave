import React from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import Movies from '../Screens/Data/MovieData'
import MovieInfo from '../Components/Single/MovieInfo'
import MovieRates from '../Components/Single/MovieRates'
import Titles from '../Components/Titles'


function SingleMovie() {
  const {id} = useParams()
  const movie = Movies.find((movie) => movie.name === id)
  return (
    <Layout>
      <MovieInfo movie={movie}/>
      <div className="container mx-auto min-h-screen px-2 my-6">
        {/* <MovieCast /> */}
        <MovieRates movie={movie} />
        <div className="my-16">
          <Titles
        </div>
      </div>


    </Layout>
  )
}

export default SingleMovie