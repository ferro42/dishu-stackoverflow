import React from 'react'
import Leftsidebar from '../../components/Lesftsidebar/Leftsidebar'
import Rightsidebar from '../../components/Rightsidebar/Rightsidebar'
import Homemainbar from '../../components/Homemainbar/Homemainbar'

import '../../App.css'
const Home = () => {
 
  return (
    <div className='home-container-1'>
      <Leftsidebar />
      <div className='home-container-2'>
        <Homemainbar />
        <Rightsidebar/>
        
      </div>
      
    </div>
  )
}

export default Home
