// Bookmark Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react'
import { Button, Card, CardContent, Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fade, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


// Components & Necessary Files 


// Bookmark Component 
function Bookmark() {

    const [ selectedBoxIndex, setSelectedBoxIndex ] = useState( null );
    const [ bookmarks, setBookmarks ] = useState([]);
    const [ visibleBookmarks, setVisibleBookmarks ] = useState([]);
    const [ loading, setLoading ] = useState( true );
    const [ notes, setNotes ] = useState( '' );
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
                setLoading( false );
                console.log( bookmarks );    
            }
            catch( error ){
                console.error( `Error fetching bookmarks`, error );
                setLoading( false );
            }
        }
            fetchBookmarks();
    }, []);

    useEffect(() => {
        if ( !loading && bookmarks.length > 0 ) {
          bookmarks.forEach(( _, index ) => {
            setTimeout(() => {
              setVisibleBookmarks(( prevVisible ) => [ ...prevVisible, index ]);
            }, index * 300); 
          });
        }
      }, [ loading, bookmarks ]);
    
    const displayFullDetails = ( index ) => {
        setSelectedBoxIndex(( previousIndex ) => (
            previousIndex === index ? null : index
        ));
    };

    const handleEditNotes = async ( index ) => {
        try{
            const { userId, token } = getUserId();
            const response = await axios.put( `/bookmarks/modify/${ index }`, {
                headers: {
                    Authorization: `Bearer ${ token }`
                }
            });
            console.log( response.data );
        }
        catch( error ){
            console.error( error );
        }
    }

    return (
        <div 
            className = "bookmark-container"
            style = {{
                margin: '6rem',
            }}
        >
            <Card
                sx = {{ 
                    alignItems: 'center',
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
                    height: '5rem',
                    margin: '2rem',
                    textAlign: 'center'
            }}
            >
            <span style = {{ 
                display: 'flex', 
                margin: '.3rem', 
                fontSize: '2rem', 
                color: 'white ' 
            }}
            >
                <BookmarksIcon fontSize = 'large'></BookmarksIcon>
            </span>
            Bookmarks    
            </Card>
            { loading ? (
                <Typography variant="h6" style={{ color: 'cyan', textAlign: 'center' }}>
                Loading bookmarks...
              </Typography>
            ):( 
                 bookmarks.map(( item, index ) => (
                    <Fade in = { visibleBookmarks.includes(index) } timeout = { 1000 } key = { index }>
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
                      height: selectedBoxIndex === index ? 'auto' : '11rem',
                      margin: 'auto',
                      marginBottom: '1rem' ,
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
                        { console.log( item.response_data.id ) }
                        { item.response_data.id }
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
                        { selectedBoxIndex === index && (
                            <>
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
                            Plane Age:     
                            </Typography>
                            <Typography
                                variant = 'h6'
                                style = {{
                                    color: 'cyan'
                                }}
                                >
                            { item.response_data.plane_age }
                            </Typography>
                        </div>
                        <div 
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
                Plane Series: 
                </Typography> 
                <Typography
                  variant = 'h6'
                  style = {{
                      color: 'cyan'
                    }}
                    >
                 { item.response_data.plane_series } 
                </Typography>
              </div>
              <div 
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
                Plane Status:
                </Typography>
                <Typography
                  variant = 'h6'
                  style = {{
                      color: 'cyan'
                    }}
                    >
                { item.response_data.plane_status }
                </Typography>
              </div>
              <div 
                style = {{
                    display: 'flex',
                    justifyContent: 'center'
                }}
                >
              { item.response_data.engines_count && (
                  <>
                  <Typography
                    variant = 'h6'
                    style = {{
                        color: 'white',
                        marginRight: '1rem'
                    }}
                    >
                  Engines Count:
                  </Typography>
                  <Typography 
                    variant = 'h6'
                    style = {{
                        color: 'cyan'
                    }}
                    >
                  { item.response_data.engines_count }
                  </Typography>
                </>
              )}
              </div>
              <div 
                style = {{
                    display: 'flex',
                    justifyContent: 'center'
                }}
                >
              { item.response_data.engines_type && (
                  <>
                  <Typography
                    variant = 'h6'
                    style = {{
                        color: 'white',
                        marginRight: '1rem'
                    }}
                    >
                  Engines Type:
                  </Typography>
                  <Typography 
                    variant = 'h6'
                    style = {{
                        color: 'cyan'
                    }}
                    >
                  { item.response_data.engines_type }
                  </Typography>
                </>
              )}
              </div>
              <div 
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
                Construction Number:
                </Typography>
                <Typography
                  variant = 'h6'
                  style = {{
                      color: 'cyan'
                    }}
                    >
                { item.response_data.construction_number }
                </Typography>
              </div>
              <div 
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
                Regristration Number:
                </Typography>
                <Typography 
                  variant = 'h6'
                  style = {{
                      color: 'cyan'
                    }}
                    >
                { item.response_data.registration_number }  
                </Typography>
              </div>
              <div 
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
                Production Line: 
                </Typography>
                <Typography 
                  variant = 'h6'
                  style = {{
                      color: 'cyan'
                    }}
                    >
                { item.response_data.production_line } 
                </Typography>
              </div>
              <div 
              style = {{
                  display: 'flex',
                  justifyContent: 'center'
                }}
                >
                <Typography 
                  variant = 'h6'
                  sx = {{
                      color: 'white',
                      marginRight: '1rem'
                    }}
                    >
                Delivery Date:  
                </Typography>
                <Typography
                  variant = 'h6'
                  sx = {{
                      color: 'cyan'
                    }}
                    >
                { item.response_data.delivery_date }  
                </Typography>
              </div>
              <div 
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
                First Flight Date:
                </Typography>
                <Typography
                  variant = 'h6'
                  style = {{
                      color: 'cyan'
                    }}
                    >
                { item.response_data.first_flight_date } 
                </Typography>
              </div>
              <div 
              style = {{
                  display: 'flex',
                  justifyContent: 'center'
                }}
                >
              { item.response_data.plane_owner && (
                  <>
                  <Typography
                    variant = 'h6'
                    style = {{
                        color: 'white',
                        marginRight: '1rem'
                    }}
                    >
                  Plane Owner:
                  </Typography>
                  <Typography 
                    variant = 'h6'
                    style = {{
                        color: 'cyan'
                    }}
                    >
                  { item.response_data.plane_owner }
                  </Typography>
                </>
                )}
              </div>
              <div 
                style = {{
                    display: 'flex',
                    justifyContent: 'center'
                }}
                >
                { item.notes && (
                    <>
                    <Typography
                        variant = 'h6'
                        style = {{
                            color: 'white',
                            marginRight: '1rem'
                        }}
                        >
                    Notes:     
                    </Typography>
                    <Typography 
                        variant = 'h6'
                        style = {{
                            color: 'cyan'
                        }}
                        >
                    { item.notes }    
                    </Typography>
                    </>
                )}
                </div>
                </>
              )}
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
                onClick = { () => displayFullDetails( index ) }
                >
                        { selectedBoxIndex === index ? 'Hide Details' : 'Show Details' }    
                        </Button>
                        <Button 
                        type = 'submit'
                        variant = 'outlined'
                        color = 'primary'
                        component = 'span'
                        sx = {{
                            color: 'cyan',
                            borderColor: 'cyan',
                            fontWeight: 'bold',
                            margin: '1rem',
                            '&:hover': {
                                color: '#212121',
                                borderColor: 'white',
                                backgroundColor: 'cyan',
                                fontWeight: 'bold'
                            },
                        }} 
                        onClick={ () => handleEditNotes( index ) }
                        >
                        Edit Notes
                        </Button>
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
                        Remove
                        </Button>
                </CardContent>
                </Card>
                </Fade>
                )
            ))}
        </div>
    );
}

export default Bookmark;