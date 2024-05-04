// NavBar Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

// Components & Necessary Files 

// NavBar Component 
function NavBar() {

    return(
        <div className = 'navbar-container'> 
            <AppBar sx = {{ backgroundColor: '#212121' }}> 
                <Box sx = {{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: '20px',
                    padding: '4px'
                    }}>

                    <Typography 
                    component = { Link } 
                    to = '/' 
                    color = 'white'
                    sx = {{ 
                        color: 'white', 
                        textDecoration: 'none',
                        fontSize: '1.8rem', 
                        '&:hover': {
                            color: 'black',
                            backgroundColor: '#006064',
                            borderRadius: '3px'
                          },
                    }}> 
                    Home </Typography>

                    <Typography 
                    component = { Link } 
                    to = '/search' 
                    color = 'white'
                    sx = {{ 
                        color: 'white', 
                        textDecoration: 'none',
                        fontSize: '1.8rem', 
                        '&:hover': {
                            color: 'black',
                            backgroundColor: '#006064',
                            borderRadius: '3px'
                          },
                    }}>
                    Search </Typography>
                    
                    <Typography 
                    component = { Link } 
                    to = '/users/login' 
                    color = 'white'
                    sx = {{ 
                        color: 'white', 
                        textDecoration: 'none',
                        fontSize: '1.8rem', 
                        '&:hover': {
                            color: 'black',
                            backgroundColor: '#006064',
                            borderRadius: '3px'
                          },
                    }}>
                    Login </Typography>

                    <Typography 
                    component = { Link } 
                    to = '/users/create' 
                    color = 'white'
                    sx = {{ 
                        color: 'white', 
                        textDecoration: 'none',
                        fontSize: '1.8rem', 
                        '&:hover': {
                            color: 'black',
                            backgroundColor: '#006064',
                            borderRadius: '3px'
                          },
                    }}>
                    Create </Typography>

                </Box>
            </AppBar>
        </div>
    )

}

export default NavBar;