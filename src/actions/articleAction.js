import {postarticle,getarticles} from '../api/articleServices';

export const postArticle=(articledata)=>async(dispatch)=>{
    try{
        console.log(articledata);
        dispatch({ type:'ARTICLE_POST_REQUEST' })
        const {data}=await postarticle(articledata);
        dispatch({ type:'ARTICLE_POST_SUCCESS',payload:data.data })
        return data

    }catch(error){
        dispatch({type:'ARTICLE_POST_FAIL',
        payload: error.response && error.response.data.message ? error.response.data.message:error.message })

    }
}

export const getArticles=()=>async(dispatch)=>{
    try{
        // console.log(articledata);
        dispatch({ type:'ARTICLES_REQUEST' })
        const {data}=await getarticles();
        dispatch({ type:'ARTICLES_REQUEST_SUCCESS',payload:data.data })
        return data
    }catch(error){
        dispatch({type:'ARTICLES_REQUEST_FAIL',
        payload: error.response && error.response.data.message ? error.response.data.message:error.message })

    }
}
