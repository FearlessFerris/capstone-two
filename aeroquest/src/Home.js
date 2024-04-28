// Homepage Component Implementation


// Dependencies 
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';

// Components & Necessary Files 
import SearchBar from './SearchBar';

// Homepage Component 
function Home() {


    return(
        <div className = 'homepage-container'>
            <SearchBar />
        </div>
    )
}

export default Home;
