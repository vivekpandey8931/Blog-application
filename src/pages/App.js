import React from 'react';
// import PostList from './PostList';
import Header from '../components/Header';
import './app.css';
import {Route,BrowserRouter,Switch } from 'react-router-dom'
import Login from '../components/Login';
import AboutUs from './AboutUs';
import Sidebar from '../components/Sidebar';
import Home from './Home';
import SignUp from '../components/SignUp';
import Feedback from './Feedback';
import Footer from '../components/Footer';
import BlogDetail from './BlogDetail';
function App (){
    return(
        <div className="app">
           <BrowserRouter>
              <Header/>
              <Sidebar/>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/aboutus' component={AboutUs}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/feedback' component={Feedback}/>
                <Route path='/blogdetail' component={BlogDetail} />
            </Switch>
            <Footer/>
           </BrowserRouter>
        </div>
    )
}
export default App;