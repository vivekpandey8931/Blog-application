
export const FeedbackReducer=(state={},action)=>{
    switch(action.type){
        case 'FEEDBACK_REQUEST':
            return {loading :true}
        case 'FEEDBACK_SUCCESS':
            return {loading:false,feedback:action.payload}
        case 'FEEDBACK_FAIL':
            return {loading:false,error:action.payload}
        default :
            return state

    }

}