import React, {useState} from 'react'
import './Userprofile.css'
import {useDispatch} from 'react-redux'
import { updateprofile } from '../../actions/users'
const Editprofileform = ({currentuser, setSwitch }) => {
    const [name, setname]= useState(currentuser?.result?.name)
    const [about, setabout]= useState(currentuser?.result?.about)
    const [tags, settags]= useState('')
    const dispatch= useDispatch()
    const handlesubmit=(e)=>{
        e.preventDefault()
        if(tags.length === 0){
            dispatch(updateprofile(currentuser?.result?._id,{name, about,tags:currentuser?.result?.tags}))
        }else{
            dispatch(updateprofile(currentuser?.result?._id,{name, about, tags}))
        }
        setSwitch(false)
    }
  return (
    <div>
        <h1 className='edit-profile-title'>
            Edit Your Profile
        </h1>
        <h2 className='edit-profile-title-2'>
            Public information
        </h2>
        <form action="" className='edit-profile-form' onSubmit={handlesubmit}>
            <label htmlFor="name">
                <h3>Display name</h3>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
            </label>
            <label htmlFor="about">
                <h3>About me</h3>
                <textarea id="about" cols="30" rows="10" value={about} onChange={(e)=>setabout(e.target.value)}></textarea>
            </label>
            <label htmlFor="tags">
                <h3>Watched tags</h3>
                <p>Add tags separated by 1 space</p>
                <input type="text" id='tags' onChange={(e)=>settags(e.target.value.split(' '))} />
            </label><br />
            <input type="submit" value='Save profile' className='user-submit-btn' />
            <button type='button' className='user-cancel-btn' onClick={()=>setSwitch(false)}> Cancel </button>
        </form>
      
    </div>
  )
}

export default Editprofileform
