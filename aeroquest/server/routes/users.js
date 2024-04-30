// Users Routes 


// Dependencies 
const express = require( 'express' );
const router = express.Router();
const axios = require( 'axios' );
const db = require( '../db' );

// Routes 

router.get( '/', ( req, res ) => {
    return res.send( 'Welcome to the users homepage!!!' );
});

// Create New User Account 
router.post('/create', async (req, res, next) => {
    try {
        console.log('Received data:', req.body);
        const {
            username,
            password,
            email,
            dob,
            imageUrl,
            imageUpload
        } = req.body;

        // Check if imageUrl and imageUpload are provided in the request
        const hasImageUrl = imageUrl !== undefined && imageUrl.trim() !== '';
        const hasImageUpload = imageUpload !== undefined && imageUpload.trim() !== '';

        // Create an array to hold values for insertion
        const values = [username, password, email, dob];

        // Build the initial part of the SQL query
        let query = `INSERT INTO users (username, password, email, dob`;

        // Conditionally add imageUrl and imageUpload to the SQL query and values array
        if (hasImageUrl) {
            query += ', image_url';
            values.push(imageUrl);
        }
        if (hasImageUpload) {
            query += ', image_upload';
            values.push(imageUpload);
        }

        // Complete the SQL query and add placeholders for values
        // Complete the SQL query and add placeholders for values
        query += `) VALUES ($1, $2, $3, $4`;
        for (let i = 5; i <= values.length; i++) {
            query += `, $${i}`;
        }
        query += `) RETURNING *;`;


        console.log('Database insertion query:', query);
        console.log('Database insertion values:', values);

        // Execute the query with the values array
       // Execute the query with the values array
        const result = await db.query(query, values);
        if (result.rowCount > 0) {
            console.log('User created successfully:', result.rows[0]);
            res.status(201).json({
                message: `User ${username} was created successfully!`
            });
            res.redirect( '/');
        } else {
            console.error('Failed to create user:', result);
            res.status(500).json({ error: 'Failed to create user. Please try again.' });
        }

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'An error occurred while creating the user.' });
        next(error);
    }
});

module.exports = router;
