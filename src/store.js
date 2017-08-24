import {createStore, combineReducers  , applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'
import imagesReducer from './reducers/imagesReducer'
import loginReducer from './reducers/loginReducer'
import {reducer as formReducer} from 'redux-form'
export default createStore(
    combineReducers ({
        images: imagesReducer,
        login: loginReducer,
       // form: formReducer
    }),
     applyMiddleware(promise(),thunk,createLogger())
 )