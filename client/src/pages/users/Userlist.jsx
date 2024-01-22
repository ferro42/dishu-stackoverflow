import React from 'react'
import {useSelector} from 'react-redux'
import User from './User'
import './User.css'
const Userlist = () => {
    const users = useSelector((state)=> state.usersreducer)
  return (
    <div className='userlist-container'>
      {
        users.map((user)=>(
          <User user={user} key={user?._id}/>
        ))
      }
    </div>
  )
}

export default Userlist
