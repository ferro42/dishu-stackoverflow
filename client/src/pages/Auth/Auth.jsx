import React, {useState} from 'react'
import './Auth.css'
import icon from '../../assets/1298710_stack overflow_icon.png'
import Aboutauth from './Aboutauth'
import { signup, login } from '../../actions/auth'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'



const Auth = () => {
    
    const [isSignup, setIsSignup] = useState(false)
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
   
    const handleswitch= () => {
        setIsSignup(!isSignup)
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
        
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email || !password){
            alert("Enter email & password")
        }
        if (isSignup) {
            if(!name){
                alert("Enter a name to continue")
            }
            dispatch(signup({name , email, password}, navigate))
        }else{
            dispatch(login({email, password}, navigate))
        }  
    }
    
    
  return (
    <section className ='auth-section'>
        {isSignup && <Aboutauth/>}
        <div className='auth-container-2'>
            {!isSignup && <img src={icon} alt='stack-overflow' className='login-logo'/>}
            <form onSubmit={handleSubmit}>
                {
                    isSignup && (
                        <label htmlFor='name'>
                            <h4>Display Name</h4>
                            <input type="text" id='name' name='name' onChange={(e) => {setname(e.target.value)}} />
                        </label>)                   
                }
                <label htmlFor="email">
                    <h4>Email</h4>
                    <input type="email" name='email' id='email' onChange={(e) => {setemail(e.target.value)}}/>
                </label>
                <label htmlFor="password">
                    <div style={{display:'flex',justifyContent:"space-between"}}>
                        <h4>Password</h4>
                        {!isSignup &&<p style={{color:"#007ac6", fontSize:'13px'}}>forgot Password?</p>}
                    </div>
                    <input type="password" name='password' id='password' onChange={(e) => {setpassword(e.target.value)}} />
                    {isSignup && <p style={{color:"#666767", fontSize:'13px'}}>Passwords must contain at least eight <br />characters, including at least 1 letter <br />and 1 number.</p>}
                </label>
                {
                    isSignup &&(
                        <label htmlFor="check">
                            <input type="checkbox" id='check' />
                            <p style={{fontSize:'13px'}}>Opt-in to receive occasional product <br /> updates, user research invitations, company <br />announcements, and digests.</p>
                        </label>
                    )
                }
                <button type='submit' className='auth-btn'>{isSignup ? 'Sign up':'Log in'}</button>
                {
                    isSignup &&(
                        <p style={{color:"#666767", fontSize:'13px'}}>
                            By clicking “Sign up”, you agree to our 
                            <span style={{color:"#007ac6"}}> terms of <br /> service</span> and acknowledge that you have read and <br /> understand our 
                            <span style={{color:"#007ac6"}}> privacy policy</span>and 
                            <span style={{color:"#007ac6"}}> code of <br />conduct</span>.
                        </p>
                    )
                }
            </form>
            <p>
                {isSignup ? 'Already have an account?' : "Don't have an account?"}
                <button type = 'button' className='handle-switch-btn' onClick={handleswitch}>{isSignup ? "Log in":'sign up'}</button>
            </p>
        </div>
    </section>
  )
}

export default Auth
