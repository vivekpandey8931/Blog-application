import httpClient from '../helpers/http-client';


const userLogin =async(data)=>{
    let response=await httpClient.post('/users/login',data);
    return response
}
const userRegister =async(data)=>{
    let response=await httpClient.post('/register',data);
    return response
}


export {
    userLogin,userRegister
};