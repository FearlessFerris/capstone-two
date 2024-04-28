// AeroQuest Application 


// Dependencies 
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';


// Components & Necessary Files 
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Home from './Home';
import Login from './Login';
import CreateUser from './CreateUser';
import './static/css/app.css';



function App() {
  return (
    <div className = 'application-container'>
      <BrowserRouter>
        <NavBar />
          <Routes> 
            <Route path = '/' element = { <Home /> } />
            {/* <Route path = '/search' /> */}
            <Route path = '/login' element = { <Login /> } />
            <Route path = '/users/create' element = { <CreateUser /> } />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
