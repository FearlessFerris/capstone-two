// Profile Component Implementation 


// Dependencies
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Card, CardHeader, Typography, Button } from '@mui/material'
import axios from 'axios';


// Components & Necessary Files 


// Profile Component 
function Profile() {

    const [ profile, setProfile  ] = useState( null );

    useEffect( () => {
        const getProfile = async () => {
            try{
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error('Token is missing!');
                    return;
                }

                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    },
                };

                const response = await axios.get( '/users/profile', config );
                console.log( response.data );
                setProfile( response.data.data );
            }
            catch( error ){
                console.error( error );
            }
        };
        getProfile();
    }, []);

    return(
        <div className = 'profile-container'
            style = {{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                height: '70vh',
                flexDirection: 'column',
                margin: '20vh',
                position: 'relative'
            }}
        >
            <Card 
                sx = {{
                    alignItems: 'center',
                    backgroundColor: '#212121',
                    borderRadius: '4px',
                    border: '3px solid white',
                    color: 'cyan',
                    display: 'flex',
                    fontSize: 'xx-large',
                    fontWeight: 'bold',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    textAlign: 'center',
                    width: '600px',
                    height: '650px'
                }}
            >
            Profile
                
                <CardHeader
                    title = { profile ? `Username: ${ profile.username }` : 'Loading...'}
                >
                </CardHeader>
            </Card>
        </div>
    )
}

export default Profile; 