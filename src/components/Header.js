import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import{logout} from '../actions/userAction';
const Header = () => {
    const [loggedIn, setLogin] = useState(false)
  const userLogin =useSelector(state=>state.login);
  const {userInfo  }=userLogin;
  const dispatch=useDispatch();

    const logOutHandler=()=>{
           dispatch(logout())
    }

    return (
        <div>
            <div class="ui  inverted menu">
                <div className="ui item">   
                    <Link to='/' class="item"><i class="home icon"></i>Home</Link>
                    <Link to='/aboutus'  class="item">About-us</Link> 
                    <a class="item">Contact Us</a>
                    <Link to='/feedback' class="item">Feedback</Link> 
                </div>
                <div className="right menu">
                   {userInfo ?
                   <div class="ui simple dropdown item">
                   <i class="user circle icon"></i>{userInfo.name} <i class="fa fa-caret-down"></i>
                   <div class="menu">
                   <div class="item" onClick={logOutHandler}><i class="sign-out icon"></i>sign out</div>
                   </div>
               </div>
                   :
                   <Link to='/login' class="item" ><i class="sign-out icon"></i>Sign In</Link>}
 
                    </div>
            </div>
        </div>
    )
}

export default Header
