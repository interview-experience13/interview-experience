import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeMainPage from '../pages/home/HomeMainPage'

const AppRouter = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route>
          {/* <Route path='error/*' element={<ErrorsPage />} /> */}
          {/* <Route path='logout' element={<Logout />} /> */}
          <Route path='/*' element={<HomeMainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter