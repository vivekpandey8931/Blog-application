import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import Message from './Message';
import {register} from '../actions/userAction';
import Spinner from './Spinner';


const SignUp = ({ location,history}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
    

    const redirect=location.search? location.search.split('=')[1]: '/';
    const dispatch=useDispatch();
    const userRegister=useSelector(state=>state.login);
    const {loading ,error,userInfo}=userRegister;
    
    useEffect(()=>{
        if(userInfo){
          history.push(redirect)
        }
    },[]);
    
    const submitHandler=async(e)=>{
        e.preventDefault();
       const res=await dispatch(register(name,email,password));
       console.log(res)
       if(res){
        history.push(redirect);
       }
     }
    

    return (
        <div className="login">
             <div class="ui teal inverted segment">
             {error && <Message  color={'red'}>{error}</Message>}
             {loading && <Spinner /> }
                 <h2>SignUp!</h2>
                <div class="ui red inverted form">
                    <div class="field">
                        <label>Name:</label>
                        <input type="text" name="name" onChange={(e)=>setName(e.target.value)} value={name} placeholder="name"/>
                    </div>
                    <div class="field">
                            <label>E-mail:</label>
                            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="xyz@gmail.com"/>
                    </div>
                    <div class="field">
                        <label>Password:</label>
                        <input type="text" name="password"  onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
                    </div>
                    <button class="ui button"onClick={submitHandler} >SignUp</button> already have account? <Link to='/login'>Login</Link>
                </div>
             </div>
        </div>
    )
}

export default SignUp;
