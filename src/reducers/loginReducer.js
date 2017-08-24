const initalState = {
    'login' : false,
    data: []
}
const loginReducer = ( state = initalState, aciton) => {
    switch(aciton.type) {
        case 'LOGIN':
            localStorage.setItem('token',action.payload)
            return {
                'login': true,
                data : aciton.payload
            }
        break;
        case 'LOGOUT' :
            localStorage.clear('token')
        break;
    }
    return state
}

export default loginReducer