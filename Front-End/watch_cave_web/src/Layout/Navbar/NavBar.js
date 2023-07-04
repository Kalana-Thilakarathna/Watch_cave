import React from 'react'
import LOGO from '../../Images/logo.jpg'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <img src={LOGO} alt="logo" className="w-full h-20 object-contain" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
