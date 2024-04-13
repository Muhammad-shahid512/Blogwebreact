import React from 'react'
import Homepage from './Components/Home/Homepage'
import "./App.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import DetailBlog from './DetailPage/DetailBlog'
import Booking from './Blogs/Booking'
export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homepage></Homepage>}></Route>
    <Route path='/blog/:id' element={<DetailBlog></DetailBlog>}></Route>
    <Route path='/Booking/:name' element={<Booking/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
