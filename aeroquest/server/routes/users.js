// Users Routes 


// Dependencies 
const express = require( 'express' );
const router = express.Router();
const axios = require( 'axios' );
const pool = require( '../db' );


// Routes 

router.post( '/create', async ( req, res, next ) => {
    try{
        const { username, password, confirmPassword, email, dob, imageUrl, imageUpload } = req.body;
        if( !username || !password || !confirmPassword || !email ){
            return res.status( 400 ).json({ error: 'Please complete all required fields!' });
        }
        if( password !== confirmPassword ){
            return res.status( 400 ).json({ error: 'Please make sure passwords match!' });
        }
        
        let query = `INSERT INTO users ( username, password, email `;
        let values = [ username, password, email ];
        if( dob ){
            query += `, dob`;
            values.push( dob );
        }
        if( imageUrl ){
            query += `, image_url`
            values.push( imageUrl );
        }
        if( imageUpload ){
            query += ', image_upload';
            values.push( imageUpload );
        }

        query += `) VALUES ($1, $2, $3 `;
        for( let i = 4; i < values.length + 4; i++ ){
            query += `, $${i}`;
        }

        query += `) RETURNING *;`;

        const result = await pool.query( query, values );
        res.status( 201 ).json({ message: `User ${ username }, was created successfully!` });
    }
    catch( error ){
        next( error )
    }
})

module.exports = router;
