import {userFeedback} from '../api/feedServices';

export const feedback=(data)=>async(dispatch)=>{
    try{
        dispatch({type:'REGISTER_REQUEST',})
        const {data}=await userFeedback(data)
        console.log(data);
        dispatch({type:'REGISTER_SUCCESS',payload:data.data})
        localStorage.setItem('userInfo',JSON.stringify(data.data));
        return data
    }catch(error){
        dispatch({type:'REGISTER_FAIL',
        payload: error.response && error.response.data.message ? error.response.data.message:error.message 
    })
    }
}

