import * as api from '../api'
import { setcurrentuser } from './currentuser'
import axios from 'axios'
import { updatelogin } from './users'
import {useDispatch, useSelector} from 'react-redux'
export const  signup =(authdata, navigate) => async(dispatch) => {
    try {
        const {data} = await api.signup(authdata)
        dispatch({ type:'AUTH', data })
        dispatch(setcurrentuser(JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
        let systemm
        let userDetails = navigator.userAgent.toLowerCase();
        const profileJSON = localStorage.getItem('Profile');
        const profileObject = JSON.parse(profileJSON);
        const userId = profileObject.result._id;
     
        if(window.innerWidth <= 768){
            systemm ='Mobile'
        }else{
            systemm ='Desktop'
            
        }
      
        let browserList = [
            { name: "Firefox", value: "firefox" },
            { name: "Opera", value: "opr" },
            { name: "Edge", value: "edge" },
            { name: "Chrome", value: "chrome" }, 
            { name: "Safari", value: "safari" },
        ];
        let os = [
            { name: "Android", value: "android" },
            { name: "iPhone", value: "iPhone" }, 
            { name: "iPad", value: "mac" },
            { name: "Macintosh", value: "mac" },
            { name: "Linux", value: "linux" },
            { name: "Windows", value: "win" },
        ];
        let oss;
        let browserr;
        for (let i in browserList) {
            if (userDetails.includes(browserList[i].value)) {
                browserr=browserList[i].name || "Unknown Browser";
                break;
            }
        }
        for (let i in os) {
            if (userDetails.includes(os[i].value)) {
                oss = os[i].name;
                break;
            }
        }
        
        (async () => {
            try {
              const response = await axios.get('https://ipapi.co/json');
              const ipData = response.data;
              const ipAddress = ipData.ip;

              if(userId !== null ){
  
                dispatch(updatelogin(userId,{browser:browserr,os:oss,system:systemm,ipadd:ipAddress}))
                
              } 
            } catch (error) {
              console.error('Error:', error);
            }
          })();
        
   
    } catch (error) {
        console.log(error)
    }
}

export const  login =(authdata, navigate) => async(dispatch) => {
    
    try {
        const {data} = await api.login(authdata)
        dispatch({ type:'AUTH', data })
        dispatch(setcurrentuser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
        //window.location.reload();
        let systemm
        let userDetails = navigator.userAgent.toLowerCase();
        const profileJSON = localStorage.getItem('Profile');
        const profileObject = JSON.parse(profileJSON);
        const userId = profileObject.result._id;
        
        if(window.innerWidth <= 768){
            systemm ='Mobile'
        }else{
            systemm ='Desktop'
            
        }
      
        let browserList = [
            { name: "Firefox", value: "firefox" },
            { name: "Opera", value: "opr" },
            { name: "Edge", value: "edge" },
            { name: "Chrome", value: "chrome" }, 
            { name: "Safari", value: "safari" },
        ];
        let os = [
            { name: "Android", value: "android" },
            { name: "iPhone", value: "iPhone" }, 
            { name: "iPad", value: "mac" },
            { name: "Macintosh", value: "mac" },
            { name: "Linux", value: "linux" },
            { name: "Windows", value: "win" },
        ];
        let oss;
        let browserr;
        for (let i in browserList) {
            if (userDetails.includes(browserList[i].value)) {
                browserr=browserList[i].name || "Unknown Browser";
                break;
            }
        }
        for (let i in os) {
            if (userDetails.includes(os[i].value)) {
                oss = os[i].name;
                break;
            }
        }
        
        (async () => {
            try {
              const response = await axios.get('https://ipapi.co/json');
              const ipData = response.data;
              const ipAddress = ipData.ip;

              if(userId !== null ){
  
                dispatch(updatelogin(userId,{browser:browserr,os:oss,system:systemm,ipadd:ipAddress}))
              
              } 
            } catch (error) {
              console.error('Error:', error);
            }
          })();
        
    } catch (error) {
        console.log(error)
    }
}
