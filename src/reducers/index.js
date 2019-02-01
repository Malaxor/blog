import { combineReducers } from 'redux';
import fetchPostsReducer from './fetchPostsReducer';

export default combineReducers({
    posts: fetchPostsReducer
});