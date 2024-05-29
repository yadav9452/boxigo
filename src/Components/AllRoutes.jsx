import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MyMoves from './MyMoves'
import MyProfile from './MyProfile'
import GetQuotes from './GetQuotes'
import Logout from './Logout'

function AllRoutes() {
  return (
    <div>
        
        <Routes>
            <Route path="/my-moves" element={<MyMoves/>}/>
            <Route path="/my-profile" element={<MyProfile/>}/>
            <Route path="/get-quotes" element={<GetQuotes/>}/>
            <Route path="/logout" element={<Logout/>}/>

        </Routes>
    </div>
  )
}

export default AllRoutes