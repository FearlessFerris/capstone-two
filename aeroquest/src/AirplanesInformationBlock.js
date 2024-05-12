// Airplanes Information Block Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import { AirplanemodeActive } from '@mui/icons-material';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


// Components & Necessary Files
const AIRPLANES_ENDPOINT_BASE = 'http://api.aviationstack.com/v1/airplanes';

// Airplanes Information Component  
function AirplanesInformationBlock({ data }) {

  const [ selectedBoxIndex, setSelectedBoxIndex ] = useState( null );
  const [ bookmarks, setBookmarks ] = useState([]);
  const [ notes, setNotes ] = useState( '' );
  const [ openNotes, setOpenNotes ] = useState( false );
  const [ selectedItem, setSelectedItem ] = useState( null );

  const displayFullDetails = ( index ) => {
    setSelectedBoxIndex( ( previousIndex ) => ( previousIndex === index ? null : index ));
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

  const handleApiResponse = async ( item ) => {
    try {
      console.log( item );
        const token = localStorage.getItem( 'token' );

        if( !token ){
          throw new Error( 'Authorization Token not Found' );
        }
        const userId = getUserId();
        const response = await axios.post( '/api/add', {
          userId: userId,
          endpoint: AIRPLANES_ENDPOINT_BASE,
          responseData: item,
        },
        {
          headers: {
            Authorization: `Bearer ${ token }`
          },
        }
      );
      console.log( `Response added successfully!`, response.data );
      const apiResponseId = response.data.response.id;
      console.log( apiResponseId );
      console.log( response.data.response.response_data.model_name );
      const bookmarkResponse = await axios.post( '/bookmark/add', {
        userId: userId, 
        apiResponseId: apiResponseId,
        label: response.data.response.response_data.model_name,
        notes: notes,
      },
      {
        headers: {
          Authorization: `Bearer ${ token }`,
        },
      }
    );
    console.log( `Bookmark Added Successfully!`, bookmarkResponse.data );

    } catch (error) {
        console.error( 'Error adding bookmark:', error );
    }
  };

  const handleBookmarkClick = ( item ) => {
    setSelectedItem( item );
    setOpenNotes( true );
  }

  const handleCloseNotes = ( item ) => {
    setOpenNotes( false );
  }

    return(
        <div className = "information-block">
      {data.map(( item, index ) => (
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
                  height: selectedBoxIndex === index ? 'auto' : '13rem',
                  margin: 'auto',
                  marginBottom: '10px' ,
                  textAlign: 'center',
                  width: '38vw',
        }}
        > 
          <CardContent >
            <Typography
              variant = 'h4'
            >
            <span style = {{ fontSize: '2rem', color: 'white' }}>
              <AirplanemodeActive fontSize = 'large'></AirplanemodeActive>
            </span>
            { item.model_name }
            </Typography>
            <div 
              style = {{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Typography 
                variant = 'h6'
                style = {{
                  color: 'white',
                  marginRight: '1rem'
                }}
                > 
                Airplane ID:
              </Typography>
              <Typography
                variant = 'h6'
                style = {{
                  color: 'cyan'
                }}
                >
                { item.airplane_id }
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
                Plane Age:
                </Typography>
                <Typography 
                  variant = 'h6'
                  style = {{
                    color: 'cyan'
                  }}
                >
                { item.plane_age }
                </Typography>
              </div>
            { selectedBoxIndex === index && (
              <>
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
                 { item.plane_series } 
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
                { item.plane_status }
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
                Construction Number:
                </Typography>
                <Typography
                  variant = 'h6'
                  style = {{
                    color: 'cyan'
                  }}
                >
                { item.construction_number }
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
                { item.registration_number }  
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
                { item.production_line } 
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
                { item.delivery_date }  
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
                { item.first_flight_date } 
                </Typography>
              </div>
              <div 
                style = {{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
              { item.plane_owner && (
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
                  { item.plane_owner }
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
              onClick = { () => handleApiResponse( item ) }
            >
            Bookmark
            </Button>
            <Button
                type='submit'
                variant='outlined'
                color='primary'
                component='span'
                sx={{
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
                onClick={() => handleBookmarkClick(item)}
              >
              Add Note
            </Button>
          </CardContent>
        </Card>
      ))}
      <Dialog 
        open = { openNotes } 
        onClose = { handleCloseNotes }
        fullWidth
        maxWidth = 'md'
        >
                <DialogTitle
                  style = {{
                    backgroundColor: '#212121',
                    border: '.2rem solid white',
                    color: 'cyan',
                    display: 'flex',
                    fontSize: 'xx-large',
                    justifyContent: 'center'
                  }}
                >
                Add Note
                </DialogTitle>
                <DialogContent
                  style = {{
                    backgroundColor: '#212121',
                    borderLeft: '.2rem solid white',
                    borderRight: '.2rem solid white',
                    color: 'white'
                  }}
                >
                    <DialogContentText
                      style = {{
                        backgroundColor: '#212121',
                        color: 'cyan',
                        display: 'flex',
                        fontSize: 'x-large',
                        justifyContent: 'center',
                      }}
                    >
                        Please add your note for this bookmark.
                    </DialogContentText>
                    <div 
                      style = {{
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                    >

                    <textarea
                        rows = "5"
                        cols = "80"
                        value = {notes}
                        onChange = {(e) => setNotes(e.target.value)}
                        style = {{ 
                          backgroundColor: '#212121',
                          color: 'cyan',
                          fontSize: 'x-large',
                          padding: '5px', 
                          resize: 'none' 
                        }}
                      />
                    </div>
                </DialogContent>
                <DialogActions
                  style = {{
                    backgroundColor: '#212121',
                    borderLeft: '.2rem solid white',
                    borderRight: '.2rem solid white',
                    borderBottom: '.2rem solid white',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                    <Button 
                      onClick = { handleCloseNotes } 
                      color="primary"
                      type='submit'
                      variant='outlined'
                      component='span'
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
                    Cancel
                    </Button>
                    <Button 
                      onClick={() => { handleApiResponse( selectedItem ); handleCloseNotes(); }} 
                      color="primary"
                      type='submit'
                      variant='outlined'
                      component='span'
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
                    Save
                    </Button>
                </DialogActions>
            </Dialog>
    </div>
    );
}

export default AirplanesInformationBlock;