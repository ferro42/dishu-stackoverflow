import axios from 'axios'

const API =axios.create({baseURL:'https://stackoverflowclone-xr0i.onrender.com'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('Profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`;
    }
    return req;

})
export const login=(authdata)=> API.post('/users/login',authdata);
export const signup=(authdata)=> API.post('/users/signup',authdata); 

export const postquestion=(questiondata)=> API.post('/questions/Ask', questiondata); 
export const getallquestion = () => API.get('/questions/get');
export const deletequestion=(id)=> API.delete(`/questions/delete/${id}`)

export const postanswer=(id, noofanswers, answerbody, useranswered, userid) => API.patch(`/answer/post/${id}`,{ noofanswers, answerbody, useranswered, userid})
export const deleteanswer =(id, answerid, noofanswers) => API.patch(`/answer/delete/${id}`,{answerid, noofanswers});
export const votequestion =(id, value, userid) => API.patch(`questions/vote/${id}`,{ value, userid })
export const fetchallusers = () => API.get('/users/getallusers')
export const updateprofile= (id, updatedata)=> API.patch(`/users/update/${id}`,updatedata)
export const updatelogin= (id, updatedata)=> API.patch(`/users/updatelogin/${id}`,updatedata)