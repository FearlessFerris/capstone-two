// Airplanes Information Block Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { AirplanemodeActive } from '@mui/icons-material';
import axios from 'axios';

// Components & Necessary Files


// Airplanes Information Component  
function AirplanesInformationBlock({ data }) {

  const [ selectedBoxIndex, setSelectedBoxIndex ] = useState( null );
  const [ bookmarks, setBookmarks ] = useState([]);

  const displayFullDetails = ( index ) => {
    setSelectedBoxIndex( ( previousIndex ) => ( previousIndex === index ? null : index ));
  };

  const handleBookmark = async ( item ) => {
    try {
        setBookmarks([ ...bookmarks, item ]);
        const response = await axios.post( '/bookmark/add', item );
        console.log( 'Bookmark added successfully:', response.data );
    } catch (error) {
        console.error( 'Error adding bookmark:', error );
    }
  };

    return(
        <div className = "information-block">
      {data.map(( item, index ) => (
        <Card 
            key = { index } 
            sx = {{ 
                  alignItems: 'center',
                  backgroundColor: '#212121',
                  border: '3px solid white',
                  borderRadius: '4px',
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
                  margin: '5px',
                  '&:hover': {
                      color: '#212121',
                      borderColor: 'white',
                      backgroundColor: 'cyan',
                      fontWeight: 'bold'
                  },
              }} 
              onClick = { () => handleBookmark( item ) }
            >
            Bookmark
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
    );
}

export default AirplanesInformationBlock;