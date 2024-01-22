import * as api from '../api'
import { currentuser } from './currentuser'
export const fetchallusers=()=> async(dispatch)=>{
    try {
        const {data}= await api.fetchallusers()
        dispatch({type: 'FETCH_USERS', payload: data})
    } catch (error) {
        console.log(error)   
    }
}

export const updateprofile=(id, updatedata)=> async(dispatch)=>{
    try {
        const {data}= await api.updateprofile(id, updatedata)
        dispatch({type:'UPDATE_CURRENT_USER', payload:data})
        dispatch(currentuser(JSON.parse(localStorage.getItem('Profile1')) ))
        
    } catch (error) {
        console.log(error)
    }
}
export const updatelogin=(id, updatedata)=> async(dispatch)=>{
    try {
        const {data}= await api.updatelogin(id, updatedata)
        dispatch({type:'UPDATE_CURRENT_USER', payload:data})
        dispatch(currentuser(JSON.parse(localStorage.getItem('Profile1')) ))
        
    } catch (error) {
        console.log(error)
    }
}