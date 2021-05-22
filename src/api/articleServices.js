import httpClient from '../helpers/http-client';

const postarticle =async(data)=>{
    let response=await httpClient.post('/post-article',data);
    return response
}

const getarticles=async()=>{
    let response=await httpClient.get('/getarticle')
    return response
}

export {
    postarticle,
    getarticles
}