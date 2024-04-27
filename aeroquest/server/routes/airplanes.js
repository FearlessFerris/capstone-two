// Airplanes Routes 


// Dependencies 
const express = require( 'express' );
const router = express.Router();
const axios = require( 'axios' );
const db = require( '../db' );


// Routes 

router.get( '/search', async ( req, res ) => {
    try{
        const { searchTerm } = req.query;
        const response = await axios.get( 'http://api.aviationstack.com/v1/airplanes', {
            params: {
                access_key: '818fb939f828af1331e0ea652570a62b',
                limit: 100,
                searchTerm: searchTerm
            }
        });

        const airplaneSearch = await response.data;

        console.log( airplaneSearch );
        return res.json( airplaneSearch );
    }
    catch( error ){
        console.error( `There was an error processing your request: ${ error }` );
    }
});




module.exports = router;