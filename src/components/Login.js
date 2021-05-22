import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import Message from './Message';
import {login} from '../actions/userAction';
import Spinner from './Spinner';

const Login = ({location,history}) => {
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const redirect=location.search? location.search.split('=')[1]: '/';
const dispatch=useDispatch();
const userLogin=useSelector(state=>state.login);
const {loading ,error,userInfo}=userLogin;

useEffect(()=>{
    if(userInfo){
        history.push(redirect);
    }
},[history,userInfo,redirect]);

const submitHandler=async(e)=>{
    e.preventDefault();
   const res=await dispatch(login(email,password));
   console.log(res);
 }
 
    return (
        <div className="login">
            {error && <Message  color={'red'}>{error}</Message>}
            {loading && <Spinner /> }
            <div className="ui teal inverted segment">
             <h2>Login!</h2>
                <div className="ui red inverted form">
                    <div className="field">
                            <label>E-mail:</label>
                            <input type="email" name="email"  onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="xyz@gmail.com"/>
                    </div>
                    <div className="field">
                        <label>Password:</label>
                        <input type="text" name="password"  onChange={(e)=>setPassword(e.target.value)}  value={password} placeholder="password"/>
                    </div>
                    <button className="ui button" onClick={submitHandler} >Login</button> new user ? <Link to='/signup'>SignUp</Link>
                </div>
             </div>
        </div>
    )
}

export default Login
