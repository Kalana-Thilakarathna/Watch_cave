import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const Links =[
    {
      title:'Company',
      links:[
        {
          name:'Home',
          link:'/'
        },
        {
          name:'About Us',
          link:'/about-us'
        },
        {
          name:'Contact Us',
          link:'/contact-us'
        },
        {
          name:'Movies',
          link:'/movies'
        }
      ]
    },
    {
      title:'Top Categories',
      links:[
        {
          name:'Action',
          link:'#'
        },
        {
          name:'Adventure',
          link:'#'
        },
        {
          name:'Romantic',
          link:'#'
        },
        {
          name:'Historical',
          link:'#'
        }
      ]
    },
    {
      title:'My Account',
      links:[
        {
          name:'Dashboard',
          link:'/dashboard'
        },
        {
          name:'My Favorites',
          link:'/favorite'
        },
        {
          name:'Profile',
          link:'/profile'
        },
        {
          name:'Change Password',
          link:'/password'
        }
      ]
    },
  ]
  return (
    <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 py-4 border=t-2 border-black">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
            {Links.map((link,index) => (
                <div key={index} className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pd-0">
                  <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                    {link.title}
                  </h3>
                  <ul className="text-sm flex flex-col space-y-3">
                    {link.links.map((text, index) => (
                      <li key={index} className="flex items-baseline">
                        <Link to={text.link} className="text-border inline-block w-full hover:text-subMain"></Link>
                        {text.name}
                      </li>
                    ))}
                  </ul>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Footer