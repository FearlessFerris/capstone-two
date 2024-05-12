// Airports Information Block Conponenet Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { FlightTakeoff } from '@mui/icons-material';


// Components & Necessary Files 


// Airports Information Component 
function AirportsInformationBlock({ data }){

    const [ selectedBoxIndex, setSelectedBoxIndex ] = useState( null );

    const displayFullDetails = ( index ) => {
        setSelectedBoxIndex( ( previousIndex ) => ( previousIndex === index ? null : index ));        
    };

    return(
        <div className = 'information-block'>
            { data.map(( item, index ) => (
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
                <CardContent>
                    <Typography
                        variant = 'h4'
                    >
                    <span style = {{ fontSize: '2rem', color: 'white' }}>
                        <FlightTakeoff fontSize = 'large'></FlightTakeoff>
                    </span>
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
                    Airport ID:
                    </Typography> 
                    <Typography 
                        variant = 'h6'
                        sx = {{
                            color: 'cyan'
                        }}
                    >
                    { item.id }    
                    </Typography>
                    </div>
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
                    Airport Name:
                    </Typography> 
                    <Typography 
                        variant = 'h6'
                        sx = {{
                            color: 'cyan'
                        }}
                    >
                    { item.airport_name }    
                    </Typography>

                    </div>
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
                    Country ISO:
                    </Typography> 
                    <Typography 
                        variant = 'h6'
                        sx = {{
                            color: 'cyan'
                        }}
                    >
                    { item.country_iso2 }    
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
                                { item.city_iata_code && (
                                    <>
                                        <Typography 
                                            variant = 'h6'
                                            style = {{
                                                color: 'white',
                                                marginRight: '1rem'
                                        }}
                                        > 
                                        City Iata Code:
                                        </Typography> 
                                        <Typography 
                                            variant = 'h6'
                                            sx = {{
                                                color: 'cyan'
                                            }}
                                            >
                                        { item.city_iata_code }    
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
                                { item.geoname_id && (
                                    <>
                                        <Typography 
                                            variant = 'h6'
                                            style = {{
                                                color: 'white',
                                                marginRight: '1rem'
                                        }}
                                        > 
                                        Geoname ID:
                                        </Typography> 
                                        <Typography 
                                            variant = 'h6'
                                            sx = {{
                                                color: 'cyan'
                                            }}
                                            >
                                        { item.geoname_id }    
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
                                { item.latitude && (
                                    <>
                                        <Typography 
                                            variant = 'h6'
                                            style = {{
                                                color: 'white',
                                                marginRight: '1rem'
                                        }}
                                        > 
                                        Latitude:
                                        </Typography> 
                                        <Typography 
                                            variant = 'h6'
                                            sx = {{
                                                color: 'cyan'
                                            }}
                                            >
                                        { item.latitude }    
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
                                { item.longitude && (
                                    <>
                                        <Typography 
                                            variant = 'h6'
                                            style = {{
                                                color: 'white',
                                                marginRight: '1rem'
                                        }}
                                        > 
                                        Longitude:
                                        </Typography> 
                                        <Typography 
                                            variant = 'h6'
                                            sx = {{
                                                color: 'cyan'
                                            }}
                                            >
                                        { item.longitude }    
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
                                { item.country_name && (
                                    <>
                                        <Typography 
                                            variant = 'h6'
                                            style = {{
                                                color: 'white',
                                                marginRight: '1rem'
                                        }}
                                        > 
                                        Country Name:
                                        </Typography> 
                                        <Typography 
                                            variant = 'h6'
                                            sx = {{
                                                color: 'cyan'
                                            }}
                                            >
                                        { item.country_name }    
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
                                { item.timezone && (
                                    <>
                                        <Typography 
                                            variant = 'h6'
                                            style = {{
                                                color: 'white',
                                                marginRight: '1rem'
                                        }}
                                        > 
                                        Timezone:
                                        </Typography> 
                                        <Typography 
                                            variant = 'h6'
                                            sx = {{
                                                color: 'cyan'
                                            }}
                                            >
                                        { item.timezone }    
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
                    onClick = { () => displayFullDetails( index ) }
                    >
                        Bookmark
                    </Button> 
                </CardContent>
              </Card>
            ))}
        </div>
    )
}

export default AirportsInformationBlock;