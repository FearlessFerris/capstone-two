// Search Routes 


// Dependencies 
const express = require( 'express' );
const router = express.Router();
const axios = require( 'axios' );


// Necessary Files 
const db = require( '../db' );
const { SECRET_KEY, ACCESS_KEY } = require( '../config' );



// API Endpoints 
const AIRPLANES_ENDPOINT_BASE = 'http://api.aviationstack.com/v1/airplanes';


// Routes 


// Search Routes  
router.get( '/airplanes', async ( req, res, next ) => {
    try{
        const searchTerm = req.query.searchTerm;
        const offset = req.query.offset || 0;
        const response = await axios.get( `${ AIRPLANES_ENDPOINT_BASE }?access_key=${ ACCESS_KEY }&search=${ searchTerm }&limit=10&offset=${ offset }` );
        res.status(200).json({ message: 'Aircraft Information', data: response.data.data });
    }
    catch( error ){
        console.error( `Error:`, error.response.data.error );
    }
});


module.exports = router;

