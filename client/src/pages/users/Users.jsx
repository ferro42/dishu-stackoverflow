import React from 'react'

import Leftsidebar from '../../components/Lesftsidebar/Leftsidebar'
//import { useLocation } from 'react-router-dom'
import Userlist from './Userlist.jsx'
import './User.css'
const Users = () => {
  return (
    <div className='home-container-1'>
      <Leftsidebar/>
      <div className='home-container-2' style={{marginTop:"30px"}}>
        <h1  style={{fontWeight:"400"}}>Users</h1>
        <Userlist />
      </div>
    </div>
  )
}

export default Users
