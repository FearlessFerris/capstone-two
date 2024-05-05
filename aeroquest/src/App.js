// AeroQuest Application 


// Dependencies 
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Switch, withRouter } from 'react-router-dom';


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
  
  useEffect( () => {
    const token = localStorage.getItem( 'token' );
    if( token ){
      console.log( token );
      setIsLoggedIn( true );
    }
    else{
      setIsLoggedIn( false );
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem( 'token' );
    setIsLoggedIn( false );
    history.push( '/' );
  }

  
  return (
    <div className = 'application-container'>
      <BrowserRouter>
        <NavBar isLoggedIn = { isLoggedIn } handleLogout = { handleLogout } />
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
