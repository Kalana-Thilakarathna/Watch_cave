import React from 'react'
import Layout from '../Layout/Layout'
import Head from '../Components/Home/Head'


function AboutUs() {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="About Us"/>
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                Welcome to our Watch Cave
              </h3>
              <div className="mt-3 text-sm leading-8 text-white">
              <p>
                Welcome to Watch Cave, your go-to destination for unlimited movie streaming! Our dedicated team of developers, including Kalana Thilakarathna, Lasantha Chulabaya, Harshana, Nadun, and Sahan, have come together to create a platform where you can enjoy your favorite movies for free. With Watch Cave, there are no restrictions or hidden fees - just pure cinematic entertainment at your fingertips. Explore our vast library of films spanning various genres, from timeless classics to the latest blockbusters. Whether you're in the mood for heartwarming romance, thrilling action, or thought-provoking dramas, we have something for everyone. Sit back, relax, and immerse yourself in the world of movies without breaking the bank. Join us at Watch Cave and let the streaming journey begin!
              </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">
                    10K
                  </span>
                  <h4 className="text-lg font-bold mb-1">
                    Listed Movies
                  </h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    An eclectic movie collection, spanning genres
                  </p>
                </div> 
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">
                    8K
                  </span>
                  <h4 className="text-lg font-bold mb-1">
                    Lovely Community
                  </h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                      A vibrant community united by cinematic passion.
                  </p>
                </div>
              </div>
                  
            </div>
            <img src="/Images/aboutus.jpg" alt="aboutus" className="w-full xl:block hidden h-header rounded-lg object-cover"/>
            
          </div>
          
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs