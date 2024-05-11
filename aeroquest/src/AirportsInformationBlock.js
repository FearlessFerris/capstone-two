// Airports Information Block Conponenet Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';
import { Button, Card, CardComponent, Typography } from '@mui/material';
import { FlightTakeoff } from '@mui/icons-material';
import { CardContent, ItemDescription } from 'semantic-ui-react';


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
                    GMT:
                    </Typography> 
                    <Typography 
                        variant = 'h6'
                        sx = {{
                            color: 'cyan'
                        }}
                    >
                    { item.gmt }    
                    </Typography>
                    </div>  
                </CardContent>
              </Card>
            ))}
        </div>
    )
}

export default AirportsInformationBlock;