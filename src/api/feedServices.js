import httpClient from '../helpers/http-client';

const userFeedback=async(data)=>{
    let response=await httpClient.post('/feedback',data);
    return response
}

export {
    userFeedback
}