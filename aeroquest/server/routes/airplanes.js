// Airplanes Routes 


// Dependencies 
const express = require( 'express' );
const router = express.Router();
const axios = require( 'axios' );
const db = require( '../db' );


// Necessary Files 
const authorizationMiddleware = require( '../middleware/authorization' );


// Routes 


// Initial Airplane Search 
router.get( '/search', async ( req, res ) => {
    try{
        const { searchTerm } = req.query;
        const response = await axios.get( 'http://api.aviationstack.com/v1/airplanes', {
            params: {
                access_key: '818fb939f828af1331e0ea652570a62b',
                limit: 20,
                offset: 0,
                searchTerm: searchTerm
            }
        });

        const airplaneResults = await response.data;

        console.log( airplaneResults );
        return res.json( airplaneResults );
    }
    catch( error ){
        console.error( `There was an error processing your request: ${ error }` );
    }
});

// Next Page Search Results 
router.get( '/next-page', async ( req, res ) => {
    try{
        let { searchTerm, currentPage } = req.query;
        const newOffset = currentPage * 20;

        searchTerm = searchTerm || ''; 

        const response = await axios.get( 'http://api.aviationstack.com/v1/airplanes', {
            params: {
                access_key: '818fb939f828af1331e0ea652570a62b',
                limit: 20,
                offset: newOffset,
                searchTerm: searchTerm
            }
        });

        const airplaneResults = await response.data;
        console.log( currentPage );
        console.log( airplaneResults );
        return res.json( airplaneResults );
    }
    catch( error ){
        console.error( `There was an error processing your request: ${ error }` );
    }
});


module.exports = router;