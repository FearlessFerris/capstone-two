// AeroQuest Application 


// Dependencies 
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';


// Components & Necessary Files 
import Bookmark from './Bookmark';
import CreateUser from './CreateUser';
import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';
import Profile from './Profile';
import './static/css/app.css';



function App({ history }) {

  const [ isLoggedIn, setIsLoggedIn ] = useState( false );
  const [ userProfile, setUserProfile ] = useState( null );
  
  useEffect( () => {
    const token = localStorage.getItem( 'token' );
    if( token ){
      console.log( token );
      setIsLoggedIn( true );
      fetchUserProfile( token );
    }
    else{
      setIsLoggedIn( false );
      setUserProfile( null )
    }
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      const response = await axios.get('api/user/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log( response.data );
      setUserProfile(response.data); // Set user profile data including avatar URL
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem( 'token' );
    setIsLoggedIn( false );
    setUserProfile( null );
    history.push( '/' );
  }

  
  return (
    <div className = 'application-container'>
      <BrowserRouter>
        <NavBar isLoggedIn = { isLoggedIn } handleLogout = { handleLogout } userProfile = { userProfile } />
          <Routes> 
            <Route path = '/' element = { <Home /> } />
            <Route path = '/users/profile' element = { <Profile /> } />
            <Route path = '/users/login' element = { <Login  setIsLoggedIn = { setIsLoggedIn } /> } /> 
            <Route path = '/users/create' element = { <CreateUser /> } />
            <Route path = '/users/bookmark' element = { <Bookmark /> } /> 
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
