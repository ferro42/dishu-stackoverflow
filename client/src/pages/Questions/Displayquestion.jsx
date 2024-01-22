import React from 'react'
import Leftsidebar from '../../components/Lesftsidebar/Leftsidebar'
import Rightsidebar from '../../components/Rightsidebar/Rightsidebar'
import Questiondetail from './Questiondetail'
const Displayquestion = () => {
  return (
    <div className='home-container-1'>
      <Leftsidebar />
      <div className='home-container-2'>
        <Questiondetail/>
        <Rightsidebar/>

      </div>
      
    </div>
  )
}

export default Displayquestion
