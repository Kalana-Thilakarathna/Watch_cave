import React from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import Movies from '../Screens/Data/MovieData'
import MovieInfo from '../Components/Single/MovieInfo'
import MovieRates from '../Components/Single/MovieRates'
import Titles from '../Components/Titles'
import { BiCollection } from 'react-icons/bi'
import Movie from '../Components/Movie'


function SingleMovie() {
  const {id} = useParams()
  const movie = Movies.find((movie) => movie.name === id)
  const RelatedMovies = Movies.filter((m) => m.category === movie.category)
  return (
    <Layout>
      <MovieInfo movie={movie}/>
      <div className="container mx-auto min-h-screen px-2 my-6">
        {/* <MovieCast /> */}
        <MovieRates movie={movie} />
        <div className="my-16">
          <Titles title="Related Movies" Icon={BiCollection}></Titles>
          <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {
            RelatedMovies.map((movie,index) => (
              <Movie movie={movie} key={index}/>
            ))
          }
        </div>
        </div>
      </div>


    </Layout>
  )
}

export default SingleMovie