import service from '../api/jsonplaceholder';

export const fetchPosts=()=> async (dispatch,getState)=>{
        const data= await service.get('/posts');
        dispatch({type:'FETCH_POST', payload:data});
    }
  
    
export const addPost =()=>{
    return {
        
    }
}