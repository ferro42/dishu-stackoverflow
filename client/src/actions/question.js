import * as api from '../api'
//import { useDispatch } from 'react-redux'
import { currentuser } from './currentuser'
export const askquestion = (questiondata , navigate) => async (dispatch)=> {
    try {
        const {data} = await api.postquestion(questiondata)
        dispatch({ type:"POST_QUESTION", payload: data})
        dispatch(fetchallquestion())
        dispatch(currentuser(JSON.parse(localStorage.getItem('Profile1')) ))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const fetchallquestion =() => async (dispatch) =>{
    try {
        const {data} = await api.getallquestion()
        dispatch({type: 'FETCH_ALL_QUESTION', payload: data})
    } catch (error) {
        console.log(error)
    }
}
export const deletequestion=(id, navigate)=> async (dispatch)=>{
    try {
        const { data }=  api.deletequestion(id)
        dispatch(fetchallquestion())
        navigate('/')
    } catch (error) { 
        console.log(error)
    }
}

export const postanswer = (answerdata)=> async(dispatch)=>{
    try {
        const {id, noofanswers, answerbody, useranswered, userid}=answerdata
        const { data } = await api.postanswer(id , noofanswers , answerbody , useranswered, userid)
        dispatch({type:'POST_ANSWER', payload:data})
        dispatch(currentuser(JSON.parse(localStorage.getItem('Profile1')) ))
        dispatch(fetchallquestion())
    } catch (error) {
        console.log(error)
    }
}

export const deleteanswer=(id, answerid, noofanswers)=> async (dispatch)=>{
    try {
        const { data }=await api.deleteanswer(id, answerid, noofanswers)
        dispatch(fetchallquestion())
    } catch (error) {
        console.log(error)
    }
}
export const votequestion=(id, value, userid)=> async(dispatch)=>{
    try {
        const {data}= await api.votequestion(id, value, userid)
        dispatch(fetchallquestion())
    } catch (error) {
        console.log(error)
    }
}