import React from 'react'
import NavBar from './Navbar/NavBar'
import Footer from './Footer/Footer'

function Layout({children}) {
  return (
    <>
        <div className='bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white'>
          <NavBar/>
          {children}
          <Footer/>  
        </div>
    </>
  )
}

export default Layout