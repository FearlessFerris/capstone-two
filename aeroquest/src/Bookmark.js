// Bookmark Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react'
import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


// Components & Necessary Files 


// Bookmark Component 
function Bookmark() {

    const [bookmarks, setBookmarks] = useState([]);
    const getUserId = () => {
        const token = localStorage.getItem( 'token' );
        const userId = jwtDecode( token ).id;
        console.log( userId );
        return { userId, token };
    }

    useEffect(() => {
        const fetchBookmarks = async () => {
            try{
                const { userId, token } = getUserId();
                const response = await axios.get( `/bookmark/list/${ userId }`, {
                    headers: {
                        Authorization: `Bearer ${ token }`
                    }
                });   
                setBookmarks( response.data.bookmarks );  
                console.log( bookmarks );    
            }
            catch( error ){
                console.error( `Error fetching bookmarks`, error );
            }
        }
            fetchBookmarks();
    }, []);
    



    return (
        <div 
            className = "bookmark-container"
            style = {{
                margin: '6rem',
            }}
        >
            <Card
                sx = {{ 
                    alignItems: 'top',
                    backgroundColor: '#212121',
                    border: '.2rem solid white',
                    borderRadius: '1rem',
                    color: 'cyan',
                    fontSize: 'xx-large',
                    fontWeight: 'bold',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '38rem',
                    height: '9rem',
                    margin: '2rem',
                    textAlign: 'center'
            }}
            >
            <span style = {{ display: 'flex', margin: '.2rem', fontSize: '2rem', color: 'white ' }}>
                <BookmarksIcon fontSize = 'large'></BookmarksIcon>
            </span>
            Bookmarks    
            </Card>
            { bookmarks.map(( item, index ) => (
                <Card 
                key = { index } 
                sx = {{ 
                      alignItems: 'center',
                      backgroundColor: '#212121',
                      border: '.2rem solid white',
                      borderRadius: '1rem',
                      color: 'cyan',
                      fontSize: 'xx-large',
                      fontWeight: 'bold',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      width: '38rem',
                      height: '11rem',
                      margin: 'auto',
                      marginBottom: '10px' ,
                      textAlign: 'center'
            }}
            >
                <CardContent>
                    <div 
                        variant = 'h6'
                        style = {{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    > 
                        <Typography
                            variant = 'h6'
                            style = {{
                                color: 'white',
                                marginRight: '1rem'
                            }}
                        >
                        Item ID:
                        </Typography>
                        <Typography
                            variant = 'h6'
                            style = {{
                                color: 'cyan'
                            }}
                        >
                        { item.id }
                        </Typography>
                    </div>
                    <div 
                        variant = 'h6'
                        style = {{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography
                            variant = 'h6'
                            style = {{
                                color: 'white',
                                marginRight: '1rem'
                            }}
                        >
                        Endpoint:     
                        </Typography>
                        <Typography
                            variant = 'h6'
                            style = {{
                                color: 'cyan'
                            }}
                        >
                        { item.endpoint }     
                        </Typography>
                    </div>
                    <div 
                        variant = 'h6'
                        style = {{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography
                            variant = 'h6'
                            style = {{
                                color: 'white',
                                marginRight: '1rem'
                            }}
                        >
                        Aircraft Information:     
                        </Typography>
                        <Typography
                            variant = 'h6'
                            style = {{
                                color: 'cyan'
                            }}
                        >
                        { item.response_data.model_name }   
                        { console.log( item.response_data )}
                        </Typography>
                        </div>
                        <Button 
                            type = 'submit'
                            variant = 'outlined'
                            color = 'primary'
                            component = 'span'
                            sx = {{
                                color: 'cyan',
                                borderColor: 'cyan',
                                fontWeight: 'bold',
                                '&:hover': {
                                    color: '#212121',
                                    borderColor: 'white',
                                    backgroundColor: 'cyan',
                                    fontWeight: 'bold'
                                },
                            }} 
                        >
                        Show     
                        </Button>
                </CardContent>
            </Card>
            ))}
        </div>
    );
}

export default Bookmark;