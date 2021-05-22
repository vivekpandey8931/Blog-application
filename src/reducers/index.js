import {combineReducers} from 'redux';
import postReducer from './postsreducer';
import {userLogin,userRegister} from '../reducers/userReducer';
import {articleReducer} from './articleReducer';
import {createStore,applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk';

const reducers= combineReducers({
    posts:postReducer,
    login:userLogin,
    register:userRegister,
    article:articleReducer
});

const userInfoLS=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null;
const initialState={
    login:{userInfo:userInfoLS},
    register:{userInfo:userInfoLS}
}

export const store=createStore(reducers,initialState,applyMiddleware(thunk));

