import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HomeMainPage from '../pages/home/HomeMainPage'

const AppRouter = () => {
  return (
    <BrowserRouter >
    <Navbar/>
      <Routes>
        {/* <Route path='error/*' element={<ErrorsPage />} /> */}
        {/* <Route path='logout' element={<Logout />} /> */}
        <Route path='/*' element={<HomeMainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter