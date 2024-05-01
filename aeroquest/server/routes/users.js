// Users Routes 


// Dependencies 
const express = require( 'express' );
const router = express.Router();
const axios = require( 'axios' );
const bcrypt = require( 'bcrypt' );
const db = require( '../db' );
const ExpressError = require( '../ExpressError' );

// Routes 

router.get( '/', ( req, res ) => {
    return res.send( 'Welcome to the users homepage!!!' );
});


// Login a User Account 
router.post( '/login', async ( req, res, next ) => {
    try{
        const { username, password } = req.body;
        if( !username || !password ){
            return res.status( 400 ).json({ message: 'Username and Password are required!' });
        }

        const query = `SELECT id, username, password FROM users WHERE username = $1`;
        const result = await db.query( query, [ username ] );
        console.log( result.rows[0] );
        

    } 
    catch( error ){
        console.error( error );
    }
});


// Create New User Account 
router.post( '/create', async ( req, res, next ) => {
    try {
        const {
            username,
            password,
            email,
            dob,
            imageUrl,
            imageUpload
        } = req.body;

        if( password.length < 8 || !/\d/.test( password ) ){
            return res.status(400).json({ message: 'Password length must be 8 characters long and include at least one number' });
        }

        const hashedPassword = await bcrypt.hash( password, 12 );
        const hasImageUrl = imageUrl !== undefined && imageUrl.trim() !== '';
        const hasImageUpload = imageUpload !== undefined && imageUpload.trim() !== '';
        const values = [username, hashedPassword, email, dob];

        let query = `INSERT INTO users (username, password, email, dob`;
        if (hasImageUrl) {
            query += ', image_url';
            values.push(imageUrl);
        }
        if (hasImageUpload) {
            query += ', image_upload';
            values.push(imageUpload);
        }

        query += `) VALUES ($1, $2, $3, $4`;
        for (let i = 5; i <= values.length; i++) {
            query += `, $${i}`;
        }
        query += `) RETURNING *;`;

        console.log('Database insertion query:', query);
        console.log('Database insertion values:', values);

        const result = await db.query(query, values);
        if (result.rowCount > 0) {
            console.log('User created successfully:', result.rows[0]);
            res.status(201).json({
                message: `User ${username} was created successfully!`
            });
        } else {
            console.error('Failed to create user:', result);
            res.status(500).json({ error: 'Failed to create user. Please try again.' });
        }

    } catch (error) {
        console.error('Error creating user:', error);
        if( error instanceof ExpressError ){
            res.status( error.statusCode ).json({ error: error.message });
        }else {
            res.status(500).json({ error: 'An error occurred while creating the user.' });
        }
        next(error);
    }
});

module.exports = router;
