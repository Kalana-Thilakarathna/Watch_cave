import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import AboutUs from './Screens/AboutUs'
import NotFound from './Screens/NotFound'
import ContactUs from './Screens/ContactUs'
import Movies from './Screens/Movies'
import Login from './Screens/Loging'
import Profile from './Screens/Dashboard/Profile'
import SingleMovie from './Screens/SingleMovie'
import Register from './Screens/Register'
import WatchPage from './Screens/WatchPage'
import Password from './Screens/Dashboard/Password'
import Aos from 'aos'
import FavoritesMovies from './Screens/Dashboard/FavoritesMovies'
import MoviesList from './Screens/Dashboard/Admin/MovieList'
import Dashboard from './Screens/Dashboard/Admin/DashBorad'
import Categories from './Screens/Dashboard/Admin/Categories'
import Users from './Screens/Dashboard/Admin/Users'
import AddMovies from './Screens/Dashboard/Admin/AddMovies'





function App() {
  Aos.init();
  return (
    <Routes>
      <Route path="/" element = {<HomeScreen/>} />
      <Route path="/about-us" element = {<AboutUs/>} />
      <Route path="/contact-us" element = {<ContactUs/>} />
      <Route path="/movies" element = {<Movies/>} />
      <Route path="/movie/:id" element = {<SingleMovie/>}/>
      <Route path="/watch/:id" element = {<WatchPage/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/register" element = {<Register/>}/>
      <Route path="/profile" element = {<Profile/>}/>
      <Route path="/password" element = {<Password/>}/>
      <Route path="/Favorites" element = {<FavoritesMovies/>}/>
      <Route path="/MoviesList" element = {<MoviesList/>}/>
      <Route path="/Dashboard" element = {<Dashboard/>}/>
      <Route path="/Categories" element = {<Categories/>}/>
     {/* <Route path="/Users" element = {<Users/>}/> */}
      <Route path="/AddMovie" element = {<AddMovies/>}/>

      

      <Route path="*" element = {<NotFound/>} />
    </Routes>
  )
}

export default App;
