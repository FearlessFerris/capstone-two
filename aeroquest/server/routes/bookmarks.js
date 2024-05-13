// Bookmarks Routes 


// Dependencies 
const express = require( 'express' );
const router = express.Router();
const axios = require( 'axios' );


// Necessary Files 
const db = require( '../db' );
const { SECRET_KEY, ACCESS_KEY } = require( '../config' );
const authorizationMiddleware = require( '../middleware/authorization' );


// Routes 


// Bookmarks Routes 

// Add Bookmark 
router.post( '/add', authorizationMiddleware, async ( req, res, next ) => {
    try{
        const { userId, apiResponseId, label, notes } = req.body;
        console.log( req.body );
        const query = `
            INSERT INTO bookmarks ( user_id, endpoint, response_data, notes )
            VALUES ($1, $2, $3, $4 )
            RETURNING *;    
        `;

        const result = await db.query( query, [ userId, apiResponseId, label, notes ]);
        const bookmark = result.rows[0];
        console.log( bookmark );
        res.status( 200 ).json({ message: `Bookmark added successfuly`, bookmark })
    }
    catch( error ){
        console.error( 'Error adding bookmark', error );
        return res.status( 500 ).json({ message: 'Internal Server Error' });
        next( error );
    }
});


// Get Bookmark 
router.get( '/list/:userId', authorizationMiddleware, async ( req, res, next ) => {
    try {
        const userId = req.params.userId;
        const query = `
            SELECT * FROM bookmarks
            WHERE user_id = $1;
        `;

        const result = await db.query( query, [ userId ]);

        const bookmarks = result.rows;
        res.status(200).json({ message: 'Bookmarks retrieved successfully.', bookmarks });
    } catch ( error ) {
        console.error( 'Error listing bookmarks:', error );
        res.status( 500 ).json({ message: 'Internal server error.' });
        next( error );
    }
});


// Delete Bookmark 
router.delete( '/remove/:bookmarkId', authorizationMiddleware, async ( req, res, next ) => {
    try {
        const userId = req.user.id;
        const { bookmarkId } = req.params;

        const query = `
            DELETE FROM bookmarks
            WHERE id = $1 AND user_id = $2
            RETURNING *;
        `;

        const result = await db.query( query, [ bookmarkId, userId ]);

        if ( result.rows.length === 0 ) {
            return res.status( 404 ).json({ message: 'Bookmark not found.' });
        }

        const bookmark = result.rows[0];
        res.status( 200 ).json({ message: 'Bookmark removed successfully.', bookmark });
    } catch ( error ) {
        console.error('Error removing bookmark:', error );
        res.status( 500 ).json({ message: 'Internal server error.' });
        next( error );
    }
});


// Modify Bookmark 
router.put( '/modify/:bookmarkId', authorizationMiddleware, async ( req, res, next ) => {
    try {
        const userId = req.user.id;
        const { bookmarkId } = req.params;
        const { label, notes } = req.body;

        const query = `
            UPDATE bookmarks
            SET label = $1, notes = $2
            WHERE id = $3 AND user_id = $4
            RETURNING *;
        `;

        const result = await db.query( query, [ label, notes, bookmarkId, userId ]);

        if ( result.rows.length === 0 ) {
            return res.status( 404 ).json({ message: 'Bookmark not found or you do not have permission to modify it.' });
        }

        const updatedBookmark = result.rows[0];
        res.status( 200 ).json({ message: 'Bookmark updated successfully.', bookmark: updatedBookmark });
    } catch ( error ) {
        console.error( 'Error modifying bookmark:', error );
        res.status( 500 ).json({ message: 'Internal server error.' });
    }
});

module.exports = router;

