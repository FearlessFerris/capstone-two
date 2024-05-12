// API Response Routes 


// Dependencies 
const express = require( 'express' );
const router = express.Router();
const axios = require( 'axios' );


// Necessary Files 
const db = require( '../db' );
const { SECREY_KEY, ACCESS_KEY } = require( '../config' );
const authorizationMiddleware = require( '../middleware/authorization' );


// Routes 


// API Response Routes 

// Add Response 
router.post( '/add', authorizationMiddleware, async ( req, res, next ) => {
    try{
        const { userId, endpoint, responseData } = req.body;
        const query = `
            INSERT INTO api_responses ( user_id, endpoint, response_data )
            VALUES ( $1, $2, $3 )
            RETURNING *;
        `;
        const result = await db.query( query, [ userId, endpoint, responseData ]);
        const newResponse = result.rows[0];
        res.status( 200 ).json({ message: 'API response addedd successfully!', response: newResponse });
    }
    catch( error ){
        console.error( `Error adding Response`, error )
        return res.status( 500 ).json({ message: 'Internal Server Error' });
        next( error );
    }
});


// Get Response 
router.get( '/list', authorizationMiddleware, async ( req, res, next ) => {
    try {
        const userId = req.user.id;
        const query = `
            SELECT * FROM api_responses
            WHERE user_id = $1;
        `;
        const result = await db.query(query, [userId]);
        const responses = result.rows;
        res.status( 200 ).json({ message: 'API responses retrieved successfully.', responses });
    } catch (error) {
        console.error( 'Error listing API responses:', error );
        res.status( 500 ).json({ message: 'Internal server error.' });
        next( error );
    }
});

module.exports = router;