import axios from "axios"
import {userLogin,userRegister} from '../api/userServices';

export const login=(email,password)=>async(dispatch)=>{
    try{
        dispatch({type:'LOGIN_REQUEST',})
        const {data}= await  userLogin({email,password})
        dispatch({type:'LOGIN_SUCCESS',payload:data})
        localStorage.setItem('userInfo',JSON.stringify(data));
        return data
    }catch(error){
        dispatch({type:'LOGIN_FAIL',
        payload: error.response && error.response.data.message ? error.response.data.message:error.message 
    })

    }
}

export const register=(name,email,password)=>async(dispatch)=>{
    try{
        dispatch({type:'REGISTER_REQUEST',})
        const {data}=await userRegister({name,email,password})
        
        dispatch({type:'REGISTER_SUCCESS',payload:data.data})
        localStorage.setItem('userInfo',JSON.stringify(data.data));
        return data
    }catch(error){
        dispatch({type:'REGISTER_FAIL',
        payload: error.response && error.response.data.message ? error.response.data.message:error.message 
    })

    }
}



export const logout=()=>async(dispatch)=>{
    localStorage.removeItem('userInfo');
    dispatch({type:'LOGOUT'});
}