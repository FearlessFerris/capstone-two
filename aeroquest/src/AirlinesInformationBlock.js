// Airlines Information Block Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import AirlinesTwoTone from '@mui/icons-material/AirlinesTwoTone';


// Components & Necessary Files 


// Airlines Information Component 
function AirlinesInformationBlock({ data }){

    const [ selectedBoxIndex, setSelectedBoxIndex ] = useState( null );

    const displayFullDetails = ( index ) => {
        setSelectedBoxIndex( ( previousResults ) => ( previousResults === index ? null : index ));
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
                        <AirlinesTwoTone fontSize = 'large'></AirlinesTwoTone>
                    </span>
                    { item.airline_name }
                    </Typography>
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
                        Airline ID:     
                        </Typography>
                        <Typography 
                            variant = 'h6'
                            sx = {{
                                color: 'cyan'
                            }}
                        >
                        { item.airline_id }    
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
                        Icao Code:     
                        </Typography>
                        <Typography 
                            variant = 'h6'
                            sx = {{
                                color: 'cyan'
                            }}
                        >
                        { item.icao_code }    
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
                        { item.iata_code && (
                            <>
                                <Typography 
                                    variant = 'h6'
                                    sx = {{
                                        color: 'white',
                                        marginRight: '1rem'
                                    }}
                                >
                                Iata Code: 
                                </Typography>
                                <Typography
                                    variant = 'h6'
                                    sx = {{
                                        color: 'cyan'
                                }}
                                >
                                { item.iata_code }    
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
                        { item.status && (
                            <>
                                <Typography 
                                    variant = 'h6'
                                    sx = {{
                                        color: 'white',
                                        marginRight: '1rem'
                                    }}
                                >
                                Status: 
                                </Typography>
                                <Typography
                                    variant = 'h6'
                                    sx = {{
                                        color: 'cyan'
                                }}
                                >
                                { item.status }    
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
                        { item.callsign && (
                            <>
                                <Typography 
                                    variant = 'h6'
                                    sx = {{
                                        color: 'white',
                                        marginRight: '1rem'
                                    }}
                                >
                                Callsign: 
                                </Typography>
                                <Typography
                                    variant = 'h6'
                                    sx = {{
                                        color: 'cyan'
                                }}
                                >
                                { item.callsign }    
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
                        { item.fleet_average_age && (
                            <>
                                <Typography 
                                    variant = 'h6'
                                    sx = {{
                                        color: 'white',
                                        marginRight: '1rem'
                                    }}
                                >
                                Fleet Average Age: 
                                </Typography>
                                <Typography
                                    variant = 'h6'
                                    sx = {{
                                        color: 'cyan'
                                }}
                                >
                                { item.fleet_average_age }    
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
                        { item.airline_name && (
                            <>
                                <Typography 
                                    variant = 'h6'
                                    sx = {{
                                        color: 'white',
                                        marginRight: '1rem'
                                    }}
                                >
                                Airline Name: 
                                </Typography>
                                <Typography
                                    variant = 'h6'
                                    sx = {{
                                        color: 'cyan'
                                }}
                                >
                                { item.airline_name }    
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
                                    sx = {{
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
    );
}

export default AirlinesInformationBlock;