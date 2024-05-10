// SearchBar Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import axios from 'axios';


// Components & Necessary Files 
import AircraftInformationBlock from './AircraftInformationBlock';


// SearchBar Component 
function SearchBar({ searchResults, setSearchResults }) {

    const [ searchTerm, setSearchTerm ] = useState( '' );
    const [ offset, setOffset ] = useState( 0 );
    const [ loading, setLoading ] = useState( false );

    const handleChange = ( e ) => {
        const value = e.target.value;
        setSearchTerm( value );
    }; 

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        setOffset( 0 );
        setSearchResults([]);
        fetchResults();
    };

    const fetchResults = async () => {
        try{
            setLoading( true );
            const response = await axios.get( `/search/airplanes`, {
                params: {
                    searchTerm,
                    offset,
                    limit: 10,
                }
            })
            setSearchResults( ( previousResults ) => [ ...previousResults, ...response.data.data ])
            setOffset( ( previousOffset ) => previousOffset + 10 );
        }
        catch( error ){
            console.error( `Error Fetching Results of ${ searchTerm }` );
        }
        finally{
            setLoading( false );
        }
    }
    
    return(
        <div>

        <div className = 'searchbar-container'
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '60vh',
                marginBottom: '-15vh'
            }}
            >

            <form onSubmit = { handleSubmit }>
            <Box 
                sx ={{
                    alignItems: 'center',
                    border: '3px solid white',
                    borderRadius: '4px',
                    color: 'cyan',
                    fontSize: 'xx-large',
                    fontWeight: 'bold',
                    display: 'flex',
                    backgroundColor: '#212121',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    width: '38rem',
                    height: '11rem',
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
            </Box>
        </form>
        </div>
        <AircraftInformationBlock data = { searchResults } />
    </div>
    )
}

export default SearchBar;