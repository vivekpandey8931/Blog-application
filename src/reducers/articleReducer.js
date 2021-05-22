export const articleReducer=(state={},action)=>{
    switch(action.type){
        case 'ARTICLE_POST_REQUEST':
            return {loading :true}
        case 'ARTICLE_POST_SUCCESS':
            return {loading:false,article:action.payload}
        case 'ARTICLE_POST_FAIL':
            return {loading:false,error:action.payload}
        default :
            return state

    }

}