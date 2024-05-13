// Airplanes Information Block Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import { AirplanemodeActive } from '@mui/icons-material';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { response } from 'express';


// Components & Necessary Files
const AIRPLANES_ENDPOINT_BASE = 'http://api.aviationstack.com/v1/airplanes';


// Airplanes Information Component  
function AirplanesInformationBlock({ data }) {

  const [ selectedBoxIndex, setSelectedBoxIndex ] = useState( null );
  const [ bookmarks, setBookmarks ] = useState([]);
  const [ selectedItem, setSelectedItem ] = useState( null );
  const [ dialogState, setDialogState ] = useState({
    openNotes: false,
    notes: '',
    openSuccessDialog: false,
    successMessage: '',
    openErrorMessage: false,
    errorMessage: '',
  });

  useEffect( () => {
    const fetchBookmarks = async () => {
      try{
        const token = localStorage.getItem( 'token' );
        const userId = getUserId();
        if( !userId ){
          throw new Error( `Authorization Token not found!` );
        }
        const response = await axios.get( `/bookmark/list/${ userId }`, {
          headers: {
            Authorization: `Bearer ${ token }`
          },
        });
        console.log( response.data.bookmarks );
        setBookmarks( response.data.bookmarks );
      }
      catch( error ){
        console.error( `Error fetching bookmarks`, error );
      }
    };
    fetchBookmarks();
  }, []);

  const isBookmarked = ( apiResponseId ) => {
    return bookmarks.some(( bookmark ) => bookmark.apiResponseId === apiResponseId );
  }

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

        const { responseData } = item;
        console.log( responseData );
        const userId = getUserId();
        const response = await axios.post( '/bookmark/add', {
          userId: userId,
          endpoint: AIRPLANES_ENDPOINT_BASE,
          responseData: responseData,
          notes: dialogState.notes,
        },
        {
          headers: {
            Authorization: `Bearer ${ token }`
          },
        }
      );
     
      setBookmarks((prevBookmarks) => [
        ...prevBookmarks,
        response.data,
      ]);
      setDialogState({ ...dialogState, successMessage: `bookmark has been created!` });
    }
    catch ( error ) {
      console.error( 'Error adding bookmark:', error );
      setDialogState({ ...dialogState, errorMessage: 'Bookmark already exists!', openErrorMessage: true });
    }
  };

  const handleCloseNotes = () => {
    setDialogState({ ...dialogState, openNotes: false });
  };

  const handleBookmarkClick = (item) => {
    setDialogState((prevState) => ({
      ...prevState,
      openNotes: true,
      notes: '',
      selectedItem: item,
    }));
  };

  const handleClosingDialog = (dialogType) => {
    setDialogState((prevState) => ({
      ...prevState,
      [dialogType]: false,
      successMessage: dialogType === 'openSuccessDialog' ? '' : prevState.successMessage,
      errorMessage: dialogType === 'openErrorMessage' ? '' : prevState.errorMessage,
    }));
  };

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
                onClick={ () => handleBookmarkClick( item ) }
              >
              Add Note
            </Button>
          </CardContent>
        </Card>
      ))}
      <Dialog 
        open = { dialogState.openNotes } 
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
                        value = { dialogState.notes }
                        onChange = { ( e ) => dialogState.notes( e.target.value )}
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
            <Dialog
              open = { dialogState.openSuccessDialog }
              onClose={ () => handleClosingDialog( 'openNotes' ) }
              fullWidth
              maxWidth = "md"
            >
            <DialogTitle
                style={{
                  backgroundColor: '#212121',
                  border: '.2rem solid white',
                  color: 'cyan',
                  display: 'flex',
                  fontSize: 'xx-large',
                  justifyContent: 'center',
                }}
              >
              Bookmark Added
            </DialogTitle>
              <DialogContent
                style={{
                  backgroundColor: '#212121',
                  borderLeft: '.2rem solid white',
                  borderRight: '.2rem solid white',
                  color: 'white',
                }}
              >
              <DialogContentText
                  style={{
                    backgroundColor: '#212121',
                    color: 'cyan',
                    display: 'flex',
                    fontSize: 'x-large',
                    justifyContent: 'center',
                  }}
              >
              { dialogState.successMessage }
              </DialogContentText>
            </DialogContent>
            <DialogActions
                style={{
                  backgroundColor: '#212121',
                  borderLeft: '.2rem solid white',
                  borderRight: '.2rem solid white',
                  borderBottom: '.2rem solid white',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                }}
            >
            <Button
              onClick={() => dialogState.successMessage( false )}
              color="primary"
              type="submit"
              variant="outlined"
              component="span"
              sx={{
                color: 'cyan',
                borderColor: 'cyan',
                fontWeight: 'bold',
                '&:hover': {
                  color: '#212121',
                  borderColor: 'white',
                  backgroundColor: 'cyan',
                  fontWeight: 'bold',
                },
              }}
            >
            Close
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open = { dialogState.openSuccessDialog } onClose = { () => handleClosingDialog( 'openSuccessDialog' ) }>
      <DialogTitle>Error</DialogTitle>
      <DialogContent>
        <DialogContentText>
          { dialogState.errorMessage }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button 
          onClick = { () => handleClosingDialog( 'errorMessage' ) } 
          color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
    </div>
    );
}

export default AirplanesInformationBlock;