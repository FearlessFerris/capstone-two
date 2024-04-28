// Login Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';


// Components & Necessary Files 


// Login Component 
function Login() {

    const initialState = {
        username: '',
        password: ''
    }

    const [ formData, setFormData ] = useState( initialState )
    const [ message, setMessage ] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = ( e ) => {
        e.preventDefault();
        setFormData( initialState );
        const username = formData.username;
        setMessage( `Welcome back ${ username }, hope you are well today!` )
    };

    return(
        <div className = 'login-container'
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
            flexDirection: 'column'
        }}
        >

        { message && (
            <div className = 'message-container'>
                <p
                sx = {{ 
                    color: 'white',
                    textAlign: 'center'
                }}
                > { message } </p>
            </div>
        )}
        <form>

            <Box 
                sx = {{
                    alignItems: 'center',
                    backgroundColor: '#212121',
                    borderRadius: '4px',
                    border: '3px solid white',
                    color: 'cyan',
                    display: 'flex',
                    fontSize: 'xx-large',
                    fontWeight: 'bold',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    textAlign: 'center',
                    width: '600px',
                    height: '300px'
                }}
            > Login
            
            <TextField
                    required
                    id = 'username'
                    name = 'username'
                    label = 'Username'
                    variant = 'outlined'
                    color = 'primary'
                    size = 'medium'
                    placeholder = 'Ex: StanTheManWithThePlan'
                    InputLabelProps={{
                        style: { color: 'white' },
                    }}
                    value = { formData.username }
                    onChange = { handleChange }
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
                        marginTop: '40px',
                    }}
                ></TextField>

                <TextField
                    required
                    id = 'password'
                    name = 'password'
                    label = 'Password'
                    variant = 'outlined'
                    color = 'primary'
                    size = 'medium'
                    placeholder = 'Ex: not123'
                    InputLabelProps={{
                        style: { color: 'white' },
                    }}
                    value = { formData.password }
                    onChange = { handleChange }
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
                        
                        marginTop: '10px'
                    }}
                ></TextField> 

                <label htmlFor = 'login'>
                    <Button 
                        type = 'submit'
                        variant = 'outlined'
                        color = 'primary'
                        component = 'span'
                        sx = {{
                            color: 'cyan',
                            borderColor: 'cyan',
                            fontWeight: 'bold',
                            marginTop: '30px',
                            '&:hover': {
                                color: '#212121',
                                borderColor: 'white',
                                backgroundColor: 'cyan',
                                fontWeight: 'bold'
                            },
                        }} 
                        onClick = { handleSubmit }
                    > Login 
                    </Button>
                </label>
            </Box>
        </form>
        </div>
    )
    
}

export default Login;