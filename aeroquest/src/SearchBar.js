// SearchBar Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';


// Components & Necessary Files 


// SearchBar Component 
function SearchBar() {

    return(
        <div className = 'searchbar-container'
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '60vh',
            }}
            >

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
                    width: '600px',
                    height: '200px',
                    margin: 'auto'
                }}
            > AeroQuest 
                <TextField 
                    id = 'search-input'
                    label = 'Search'
                    variant = 'outlined'
                    color = 'primary'
                    size = 'medium'
                    placeholder = 'Search for an aircraft, airport or airline...'
                    InputLabelProps={{
                        style: { color: 'white' },
                    }}
                    sx={{
                        textAlign: 'center',
                        width: '350px',
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
                        marginTop: '30px',
                        marginRight: '10px',
                    }}
                ></TextField>
            </Box>
        </div>
    )
}

export default SearchBar;