const initialState = {
    'login':true,
    data:[]
}
const imagesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_IMAGES' :
        return state = {
            ...state,
            data:action.payload
        }
        break;
        default:
            return state
    }
    return state
}
export default imagesReducer