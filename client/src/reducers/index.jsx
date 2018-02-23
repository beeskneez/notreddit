import { combineReducers } from 'redux';
import PostReducer from './postReducer.jsx';

const allReducers = combineReducers({
  posts: PostReducer
});

export default allReducers;