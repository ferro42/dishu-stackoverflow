import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import Askquestion from './pages/Askquestion/Askquestion'
import Displayquestion from './pages/Questions/Displayquestion'
import Tags from './pages/tags/tags.jsx'
import Users from './pages/users/Users.jsx'
import Userprofile from './pages/Userprofile/Userprofile'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Auth' element={<Auth/>}/>
        <Route path='/Questions' element={<Questions/>}/>
        <Route path='/Askquestion' element={<Askquestion/>}/>
        <Route path='/Questions/Askquestion' element={<Askquestion/>}/>
        <Route path='/Questions/:id' element={<Displayquestion/>}/>
        <Route path='/tags' element={<Tags/>}/>
        <Route path='/Users' element={<Users/>}/>
        <Route path='/Users/:id' element={<Userprofile/>}/>
    </Routes>
  )
}

export default AllRoutes
