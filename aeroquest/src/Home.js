// Homepage Component Implementation


// Dependencies 
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Router, Route, Link, useLocation, useNavigate } from 'react-router-dom';


// Components & Necessary Files 
import SearchBar from './SearchBar';


// Homepage Component 
function Home() {

    const navigate = useNavigate();
    const location = useLocation();
    const message = location.state?.message;
    const [ searchResults, setSearchResults ] = useState([]);

    const clearSearchResults = () => {
        setSearchResults([]);
    }

    return(
        <div className = 'homepage-container'>
        {message && (
                <div className = 'message-container'
                    style = {{ 
                        display: 'flex',
                        margin: '50px',
                        justifyContent: 'center'
                }}
                >
                    <p className = 'message' 
                    sx = {{ 
                        color: 'white',
                        textAlign: 'center',
                    }}
                    >{message}</p>
                </div>
            )}
            <SearchBar searchResults = { searchResults } setSearchResults = { setSearchResults }/>
        </div>
    )
}

export default Home;
