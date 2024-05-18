import React from 'react'
import FlexMoviesItems from '../FlexMoviesItems'
import { FaPlay, FaShare } from 'react-icons/fa'
import { Link } from "react-router-dom";


function MovieInfo({movie}) {
  return (
    <div className="relative w-full xl:h-screen text-white">
        
        <img src={`/Images/Movies/${movie?.image}`} alt={movie.name} className="hidden xl:inline-block w-full h-full object-cover"/>
        <div className="flex xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 right-0 left-0 bottom-0">
            <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
                <div className="w-full xl:col-span-1 xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
                    <img src={`/Images/Movies/${movie?.titleImage}`} alt={movie.name} className="hidden xl:inline-block w-full h-full object-cover"/>
                </div>
                <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
                    <div className="col-span-3 flex flex-col gap-4">
                        {/* title */}
                        <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                            {movie?.name}
                        </h1>
                        {/* flex items */}
                        <div className="flex items-center gap-4 font-medium text-drygray">
                            <div className=" flex bg-subMain flex-colo text-xs px-2 py-1">
                                HD 4K
                            </div>
                        <FlexMoviesItems movie={movie && movie}/>
                        </div>
                        {/* description */}
                        <p className="text-text text-sm leading-7">{movie?.desc}</p>
                        <div className="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg">
                            {/* share */}
                            <div className="flex flex-colo col-span-1 divide-border border-r">
                                <button className="w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20 hover:bg-subMain transition duration-300">
                                    <FaShare/>
                                </button>
                            </div>
                            {/* language */}
                            <div className="flex-colo col-span-2 font-medium text-sm">
                                <p>Language :{""} 
                                    <span className="truncate ml-2">{movie?.language}</span>
                                </p>
                            </div>
                            {/* watch button */}
                            <div className="sm:col-span-2 col-span-3 flex justify-end font-medium text-sm">
                                <Link to={`/watch/${movie?.name}`} className="flex bg-dry hover:bg-subMain transitions border-subMain justify-center rounded-full flex-rows gap-4 w-full sm:py-3">
                                    <FaPlay className="w-3 h-3 relative top-1"/> Watch
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieInfo