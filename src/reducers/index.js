import {combineReducers} from 'redux';
import PostReducer from './postReducer';
import UserReducer from './userReducer'

export default combineReducers({
    posts:PostReducer,
    user:UserReducer
});