// Create User Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';


// Components & Necessary Files 


// Create User Component 
function CreateUser() {

    const initialState = {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        dob: '',
        imageUrl: '',
        imageUpload: ''
    }

    const [ formData, setFormData ] = useState( initialState );
    const [ message, setMessage ] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = formData.username;
        const requiredFields = [ 'username', 'password', 'confirmPassword', 'email' ];
        setMessage( `Congratulations ${ username }, you have successfully created an account!` );
        if( !requiredFields.every(( field ) => formData[field].trim() !== '') ){
            alert( 'Please fill out all required fields!!!' );
            return;
        }
        setFormData( initialState );
    };

    return(
        <div className = 'create-user-container'
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh',
                flexDirection: 'column',
                position: 'relative'
            }}
            >

            {message && (
                <div className = 'message-container'>
                    <p className = 'message' 
                    sx = {{ 
                        color: 'white',
                        textAlign: 'center'
                    }}
                    >{message}</p>
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
                    height: '600px'
                }}
                > Create New User

                <TextField
                    required
                    id = 'username'
                    label = 'Username'
                    name = 'username'
                    variant = 'outlined'
                    color = 'primary'
                    size = 'medium'
                    placeholder = 'Ex: JackSparrow23'
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
                    placeholder = 'Ex: SomethingSecretshhh87...'
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

                <TextField
                    required
                    id = 'confirm-password'
                    name = 'confirmPassword'
                    label = 'Confirm Password'
                    variant = 'outlined'
                    color = 'primary'
                    size = 'medium'
                    placeholder = 'Psst. Make sure this matches your password'
                    InputLabelProps={{
                        style: { color: 'white' },
                    }}
                    value = { formData.confirmPassword }
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

                <TextField
                    required
                    id = 'email'
                    name = 'email'
                    label = 'Email'
                    variant = 'outlined'
                    color = 'primary'
                    size = 'medium'
                    placeholder = 'Ex: jamesbond@yahoo.com'
                    InputLabelProps={{
                        style: { color: 'white' },
                    }}
                    value = { formData.email }
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
                

                <TextField
                    id = 'image-url'
                    name = 'imageUrl'
                    label = 'Image Url'
                    variant = 'outlined'
                    color = 'primary'
                    size = 'medium'
                    placeholder = 'Ex: https://example.com/image.jpg'
                    InputLabelProps={{
                        style: { color: 'white' },
                    }}
                    value = { formData.imageUrl }
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

                <input 
                    type = 'file'
                    accept = 'image/*'
                    id = 'imageUpload'
                    name = 'imageUpload'
                    value = { formData.imageUpload }
                    onChange = { handleChange }
                    style = {{ display: 'none' }}
                    />

                <label htmlFor = 'imageUpload'>
                    <Button 
                        variant = 'outlined'
                        color = 'primary'
                        component = 'span'
                        sx = {{
                            color: 'cyan',
                            borderColor: 'cyan',
                            fontWeight: 'bold',
                            marginTop: '10px',
                            '&:hover': {
                                color: '#212121',
                                borderColor: 'white',
                                backgroundColor: 'cyan',
                                fontWeight: 'bold'
                            },
                        }} 
                        > Upload Image 
                    </Button>
                </label>

                <label htmlFor = 'create-user'>
                    <Button 
                        type = 'submit'
                        variant = 'outlined'
                        color = 'primary'
                        component = 'span'
                        sx = {{
                            color: 'cyan',
                            borderColor: 'cyan',
                            fontWeight: 'bold',
                            marginTop: '80px',
                            '&:hover': {
                                color: '#212121',
                                borderColor: 'white',
                                backgroundColor: 'cyan',
                                fontWeight: 'bold'
                            },
                        }} 
                        onClick = { handleSubmit }
                        > Create 
                    </Button>
                </label>
            </Box> 
        </form>
        </div>
    )

}

export default CreateUser;