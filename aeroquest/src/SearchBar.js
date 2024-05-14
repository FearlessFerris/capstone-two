// SearchBar Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';
import { Box, Button, InputLabel, TextField, Slider } from '@mui/material';
import axios from 'axios';


// Components & Necessary Files 

import AirlinesInformationBlock from './AirlinesInformationBlock';
import AirplanesInformationBlock from './AirplanesInformationBlock';
import AirportsInformationBlock from './AirportsInformationBlock';


// SearchBar Component 
function SearchBar({ searchResults, setSearchResults }) {

    const [ searchTerm, setSearchTerm ] = useState( '' );
    const [ offset, setOffset ] = useState( 0 );
    const [ limit, setLimit ] = useState( 30 );
    const [ loading, setLoading ] = useState( false );
    const [ selectedType, setSelectedType ] = useState( 'airplanes' );

    const handleChange = ( e ) => {
        setSearchTerm( e.target.value );
    }; 

    const handleLimitChange = ( e ) => {
        setLimit( e.target.value );
    }

    const handleTypeChange = ( e ) => {
        setSelectedType( e );
        setSearchResults([]);
    }

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        setOffset( 0 );
        setSearchResults([]);
        fetchResults();
    };

    const fetchResults = async () => {
        try{
            setLoading( true );
            const response = await axios.get( `/search/${ selectedType }`, {
                params: {
                    searchTerm,
                    offset,
                    limit,
                }
            })
            setSearchResults( response.data.data );
            setOffset( ( previousOffset ) => previousOffset + limit );
        }
        catch( error ){
            console.error( `Error Fetching Results of ${ searchTerm }` );
        }
        finally{
            setLoading( false );
        }
    }

    const renderInformationBlock = () => {
        switch( selectedType ) {
            case 'airplanes':
                return <AirplanesInformationBlock data = { searchResults } />;
            case 'airlines': 
                return <AirlinesInformationBlock data = { searchResults } />;
            case 'airports':
                return <AirportsInformationBlock data = { searchResults } />;
            default:
                return null;
        }
    }
    
    return(
        <div>

        <div className = 'searchbar-container'
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
                marginBottom: '-1vh'
            }}
            >

            <form onSubmit = { handleSubmit }>
            <Box 
                sx ={{
                    alignItems: 'center',
                    border: '.2rem solid white',
                    borderRadius: '1rem',
                    color: 'cyan',
                    fontSize: 'xx-large',
                    fontWeight: 'bold',
                    display: 'flex',
                    backgroundColor: '#212121',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    width: '43rem',
                    height: '15rem',
                    margin: 'auto'
                }}
                > AeroQuest 


                <Box
                    sx={{
                        alignItems: 'center',
                        color: 'cyan',
                        fontSize: 'xx-large',
                        fontWeight: 'bold',
                        display: 'flex',
                        backgroundColor: '#212121',
                        flexDirection: 'row', 
                        justifyContent: 'center',
                        width: '36rem',
                        height: '15vh',
                        margin: 'auto',
                    }}
                    >

                <TextField 
                    id = 'search-input'
                    label = 'Search'
                    variant = 'outlined'
                    color = 'primary'
                    size = 'medium'
                    placeholder = 'Search for an aircraft, airport or airline...'
                    value = { searchTerm }
                    onChange = { handleChange }
                    InputLabelProps={{
                        style: { color: 'white' },
                    }}
                    sx={{
                        textAlign: 'center',
                        width: '20rem',
                        color: 'white',
                        '& .MuiOutlinedInput-root .MuiInputLabel-root': {
                            color: 'white',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white',
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'cyan',
                            },
                        },
                        '& input': {
                            color: 'cyan',
                        },
                        transition: 'none'
                    }}
                    ></TextField>
                    
                <Button 
                    type='submit'
                    variant='outlined'
                    color='primary'
                    component='span'
                    sx={{
                        color: 'cyan',
                        borderColor: 'cyan',
                        fontSize: '1.6rem',
                        '&:hover': {
                            color: '#212121',
                            borderColor: 'white',
                            backgroundColor: 'cyan',
                            fontWeight: 'bold'
                        },
                        transition: 'none'
                    }} 
                    onClick = { handleSubmit }
                > 
                Search 
                </Button>
                </Box>
                <Box 
                    sx = {{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: '1rem',
                        width: '25rem'
                    }}
                >   
                  <InputLabel 
                    htmlFor = 'results-slider'
                    style = {{
                        color: 'white',
                        width: '18rem'
                    }}
                > 
                Number of Results </InputLabel>
                  <Slider 
                    defaultValue = { 30 }
                    id = 'results-slider'
                    min = { 10 }
                    max = { 100 }
                    size = 'small'
                    step = { 10 }
                    style = {{
                        color: 'cyan'
                    }}
                    valueLabelDisplay = 'auto'
                    onClick = { handleLimitChange }
                >
                Number of Results 
                </Slider>  
                </Box>
                <Box 
                    sx = {{
                        display: 'flex'
                    }}
                >
                  <Button 
                    type = 'submit'
                    variant = 'outlined'
                    color = 'primary'
                    component = 'span'
                    sx = {{
                        color: selectedType === 'airplanes' ? '#212121' : 'cyan',
                        backgroundColor: selectedType === 'airplanes' ? 'cyan' : '#212121',
                        borderColor: 'cyan',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        '&:hover': {
                            color: '#212121',
                            borderColor: 'white',
                            backgroundColor: 'cyan',
                            fontWeight: 'bold'
                        },
                    }}
                    onClick = { () => handleTypeChange( 'airplanes' ) }
                    > 
                    Airplanes 
                    </Button>
                <Box 
                    sx = {{
                        display: 'flex'
                    }}
                >
                  <Button 
                    type = 'submit'
                    variant = 'outlined'
                    color = 'primary'
                    component = 'span'
                    sx = {{
                        color: selectedType === 'airlines' ? '#212121' : 'cyan',
                        backgroundColor: selectedType === 'airlines' ? 'cyan' : '#212121',
                        borderColor: 'cyan',
                        fontWeight: 'bold',
                        marginLeft: '1rem',
                        marginRight: '1rem',
                        marginBottom: '1rem',
                        '&:hover': {
                            color: '#212121',
                            borderColor: 'white',
                            backgroundColor: 'cyan',
                            fontWeight: 'bold'
                        },
                    }}
                    onClick = { () => handleTypeChange( 'airlines' ) }
                    > 
                    Airlines 
                </Button>
                <Box 
                    sx = {{
                        display: 'flex'
                    }}
                >
                  <Button 
                    type = 'submit'
                    variant = 'outlined'
                    color = 'primary'
                    component = 'span'
                    sx = {{
                        color: selectedType === 'airports' ? '#212121' : 'cyan',
                        backgroundColor: selectedType === 'airports' ? 'cyan' : '#212121',
                        borderColor: 'cyan',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        '&:hover': {
                            color: '#212121',
                            borderColor: 'white',
                            backgroundColor: 'cyan',
                            fontWeight: 'bold'
                        },
                    }}
                    onClick = { () => handleTypeChange( 'airports' ) }
                    > 
                    Airports 
                    </Button>
                </Box>
                </Box>
                </Box>
            </Box>
        </form>
        </div>
        <div 
            key = { selectedType }
        >
            { renderInformationBlock() }
        </div>
    </div>
    )
}

export default SearchBar;