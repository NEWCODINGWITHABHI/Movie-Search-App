import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from '../components/header'
import DetailsPage from '../pages/details'
import HomePage from '../pages/Home'
import MoviePage from '../pages/Movies'
import SearchPage from '../pages/search'
import TVPage from '../pages/tv'
function RouteContainer() {
  return (
   <>
   <BrowserRouter>
   <Header/>
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/tvseries'element={<TVPage/>} />
        <Route path="/movies" element={<MoviePage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path='/details/:movieid/:mediatype' element={<DetailsPage/>}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default RouteContainer
