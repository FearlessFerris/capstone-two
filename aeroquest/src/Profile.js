// Profile Component Implementation 


// Dependencies
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Box, Card, CardHeader, Typography, TextField, Button } from '@mui/material'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


// Components & Necessary Files 
import EditForm from './EditForm';


// Profile Component 
function Profile() {

    const [ profile, setProfile  ] = useState( null );
    const [ isEditing, setIsEditing ] = useState( false );

    useEffect( () => {
        const getProfile = async () => {
            try{
                const token = localStorage.getItem( 'token' );
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
                setProfile( response.data.data );
            }
            catch( error ){
                console.error( error );
            }
        };
        getProfile();
    }, []);


    const handleEditSubmit = async ( editedProfile ) => {
        try {
            const token = localStorage.getItem( 'token' );
            if (!token) {
                console.error( 'Token is missing!' );
                return;
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${ token }`,
                },
            };

            const userId = getUserId();
            const response = await axios.put( `/users/update/${ userId }`, editedProfile, config );
            console.log( 'Profile updated successfully:', response.data );
            const updatedProfile = response.data.user;
            setIsEditing( false ); 
            setProfile( updatedProfile ); 
        } catch (error) {
            console.error('Error updating profile:', error.response || error.message || error );
        }
    };

    const getUserId = () => {
        const token = localStorage.getItem( 'token' );
        if( !token ){
          throw new Error( 'Authorization Error!' );
        }
        const decodedToken = jwtDecode( token );
        const userId = decodedToken.id;
        return userId;
      }

    return(
        <div className = 'profile-container'
            style = {{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                height: isEditing ? '65rem' : '38rem',
                flexDirection: 'column',
                margin: '15vh',
                position: 'relative'
            }}
        >
            <Card 
                sx = {{
                    alignItems: 'center',
                    backgroundColor: '#212121',
                    borderRadius: '1rem',
                    border: '.2rem solid white',
                    color: 'cyan',
                    display: 'flex',
                    fontSize: 'xx-large',
                    fontWeight: 'bold',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    textAlign: 'center',
                    width: '600px',
                    height: isEditing ? '100%' : 'auto',
                }}
            >
            Profile

                <Box 
                    sx = {{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: '100%'
                    }}
                >
                    <Avatar
                    alt = { profile ? `${ profile.username }` : 'Loading...'}
                    src = { profile ? `${ profile.image_url }` : 'Loading...'}
                    sx = {{ 
                        width: 250, 
                        height: 250, 
                        margin: '20px',
                        border: '3px solid white' 
                    }}
                    />
                </Box>
                
                <Box
                    sx = {{
                        display: 'flex',
                        flexDirection: 'row', 
                        justifyContent: 'center',
                        marginBottom: '10px',
                        width: '100%'
                    }}
                >
                    <Typography
                        variant = 'h5'
                        sx = {{
                            color: 'white',
                            fontWeight: 'bold',
                            marginRight: '1rem',
                            textShadow: '1px 1px black'
                        }}
                    >
                    Username: 
                    </Typography>
                    <Typography 
                        variant = "h5"
                    >
                    { profile ? profile.username : 'Loading...' }
                    </Typography>
                </Box>


                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row', 
                        justifyContent: 'center', 
                        width: '100%', 
                        marginBottom: '10px'
                    }}
                >
                    <Typography
                        variant = 'h5'
                        sx = {{
                            color: 'white',
                            fontWeight: 'bold',
                            marginRight: '1rem',
                            textShadow: '1px 1px black'
                        }}
                    >
                    Date of Birth: 
                    </Typography>
                    <Typography 
                        variant = "h5"
                    >
                    { profile ? profile.dob : 'Loading...' }
                    </Typography>
                </Box>
                
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: '100%', 
                        marginBottom: '10px'
                    }}
                >
                    <Typography
                        variant = 'h5'
                        sx = {{
                            color: 'white',
                            fontWeight: 'bold',
                            marginRight: '1rem',
                            textShadow: '1px 1px black'
                        }}
                    >
                    Email: 
                    </Typography>
                    <Typography 
                        variant = "h5"
                    >
                    { profile ? profile.email : 'Loading...' }
                    </Typography>
                </Box>

                
                { isEditing ? (
                    <EditForm profile = { profile } onSubmit = { handleEditSubmit } onCancel = { () => setIsEditing( false ) }/>
                ) : (

                    <Box 
                    sx = {{
                        textAlign: 'center'
                    }}
                    >
                    <Button 
                        variant = 'outlined'
                        color = 'info'
                        onClick = { () => setIsEditing(( prevState ) => !prevState )}
                        sx = {{
                            color: 'cyan',
                            borderColor: 'cyan',
                            fontWeight: 'bold',
                            marginTop: '1vh',
                            marginBottom: '1vh',
                            '&:hover': {
                                color: '#212121',
                                borderColor: 'white',
                                backgroundColor: 'cyan',
                                fontWeight: 'bold'
                            },
                        }} 
                        >
                    Edit Profile 
                    </Button>
                </Box>
                )}
            </Card>
        </div>
    )
}

export default Profile; 