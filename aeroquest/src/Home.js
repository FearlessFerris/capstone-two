// Homepage Component Implementation


// Dependencies 
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';

// Components & Necessary Files 
import SearchBar from './SearchBar';

// Homepage Component 
function Home({ message }) {

    return(
        <div className = 'homepage-container'>
        {message && (
                <div className = 'message-container'>
                    <p className = 'message' 
                    sx = {{ 
                        color: 'white',
                        textAlign: 'center'
                    }}
                    >{message}</p>
                </div>
            )}
            <SearchBar />
        </div>
    )
}

export default Home;
