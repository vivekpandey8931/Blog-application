import httpClient from '../helpers/http-client';

const postArticle =async(data)=>{
    let response=await httpClient.post('/users/login',data);
    return response
}

export {
    postArticle
}