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
                Welcome to Watch Cave, your ultimate destination for free movie streaming. Our dedicated team of developers, including Kalana Thilakarathna, Lasantha Chulabaya, Harshana, Nadun, and Sahan, has created a platform where you can enjoy a vast collection of films without any cost. With Watch Cave, there are no restrictions or hidden fees - just pure cinematic entertainment at your fingertips. Explore our diverse library spanning various genres and eras, from timeless classics to the latest blockbusters. Whether you're in the mood for heartwarming romance, thrilling action, or thought-provoking dramas, we have something for everyone. Sit back, relax, and immerse yourself in the world of movies without breaking the bank. Join us at Watch Cave and let the streaming journey begin!
              </p>
              <p>
                 At Watch Cave, we believe that everyone should have access to quality entertainment without financial barriers. Our platform is designed to provide you with a seamless streaming experience, allowing you to easily navigate, search for your favorite films, and discover new gems. We meticulously curate our library to cater to a wide range of tastes, ensuring that there's something for every movie enthusiast. Join our vibrant community of film lovers and indulge in the magic of cinema. Watch Cave is your gateway to limitless movie enjoyment, so start streaming today and let the cinematic adventure unfold. Welcome to Watch Cave, where movies come alive.
              </p>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs