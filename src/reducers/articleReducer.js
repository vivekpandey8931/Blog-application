// export const articleReducer=(state={},action)=>{
//     switch(action.type){
//         case 'ARTICLE_POST_REQUEST':
//             return {loading :true}
//         case 'ARTICLE_POST_SUCCESS':
//             return {loading:false,article:action.payload}
//         case 'ARTICLE_POST_FAIL':
//             return {loading:false,error:action.payload}
//         default :
//             return state

//     }

// }


export const listArticles = (state = { articles: [] }, action) => {
    switch (action.type)
    {
        case 'ARTICLES_REQUEST':
            return { loading: true, articles: [] }
        case 'ARTICLES_REQUEST_SUCCESS':
            return { loading: false, articles: action.payload }
        case 'ARTICLES_REQUEST_FAIL':
            return { loading: false, error: action.payload }
        default:
            return state
    }
}