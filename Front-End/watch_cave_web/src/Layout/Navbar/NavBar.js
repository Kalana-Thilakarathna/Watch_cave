import React from 'react'
import LOGO from '../../Images/logo.jpg'
import { Link,NavLink } from 'react-router-dom'
import { ImSearch,ImHeart } from 'react-icons/im'
import { RiUser5Fill } from 'react-icons/ri'

function NavBar() {
    const hover = "hover:text-subMain transition text-white";
    const Hover = ({isActive}) => {
      if (isActive === true){
        return('text-subMain')
      }
        return(hover)
    }
  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">

          {/* logo section */}
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <img src={LOGO} alt="logo" className="w-full h-20 object-contain" />
            </Link>
          </div>

          {/* search section */}
          <div className="col-span-3">
              <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
                <button
                  type="submit"
                  className="bg-subMain w-12 flex-colo h-12 rounded text-white"
                >
                  <ImSearch />
                </button>
                <input 
                  type="text"
                  placeholder="Search movie in here"
                  className="font-bold placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-balance text-black"
                />
              </form>
          </div>

          {/* menus */}
          <div className="col-span-3 font-bold text-sm hidden xl:gap-14 2xl: justify-between lg:flex xl:justify-end items-center">
            <NavLink to="/movies" className={Hover}>
              Movie
            </NavLink>
            <NavLink to="/about-us" className={Hover}>
              About Us
            </NavLink>
            <NavLink to="/contact-us" className={Hover}>
              Contact Us
            </NavLink>
            <NavLink to="/login" className={Hover}>
              <RiUser5Fill className="w-8 h-8"/>
            </NavLink>
            <NavLink to="/favorite" className={Hover + ' relative'}>
              <ImHeart className="w-6 h-6"/>
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-3 -right-3">
                3
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
