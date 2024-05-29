import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
        
        <li><Link to="/my-moves" className='linkclass'><img src="https://boxigo.in//includes/img/customerDashboard/my_moves.png" alt="" />MY MOVES </Link></li>
       

       
        <li><Link to="/my-profile" className='linkclass'><img src="https://boxigo.in//includes/img/customerDashboard/my_profile.png" alt="" />MY PROFILE </Link></li>
       

       
        <li><Link to="/get-quotes" className='linkclass'><img src="https://boxigo.in//includes/img/customerDashboard/create_estimate.png" alt="" />GET QUOTE </Link></li>
       

        
        <li><Link to="/logout" className='linkclass'><img src="https://boxigo.in//includes/img/customerDashboard/logout.png" alt="" />LOGOUT </Link></li>
       
    </div>
  )
}

export default Sidebar