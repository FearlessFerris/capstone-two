// SearchBar Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import axios from 'axios';


// Components & Necessary Files 
import InformationBlock from './InformationBlock';


// SearchBar Component 
function SearchBar() {

    const [ searchTerm, setSearchTerm ] = useState( '' );
    const [ searchResults, setSearchResults ] = useState([]);

    const handleChange = ( e ) => {
        const value = e.target.value;
        setSearchTerm( value );
    } 

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        try{
            const response = await axios.get( `/search/airplanes`, {
                params: {
                    searchTerm,
                    offset: searchResults.length,
                }
            })
            setSearchResults(( previousResults ) => [ ...previousResults, ...response.data.data ]);
        }
        catch( error ){
            console.error( `Error Submitting Search Term`, error );
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
        <InformationBlock data = { searchResults } />
    </div>
    )
}

export default SearchBar;