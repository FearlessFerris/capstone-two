// Express Server Implementation 


// Dependencies 
const express = require( 'express' );
const app = express();
const ExpressError = require( './ExpressError' );
const port = process.env.PORT || 3000;


// Other Necessary Files 
const db = require( './db' );


// Middleware 
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// Routers 
const airplanesRouter = require( './routes/airplanes' );


// Route Prefix's 
app.use( '/airplanes', airplanesRouter );


// 404 Error Handler 
app.use(( req, res, next ) => {
    const err = new ExpressError( 'Not Found', 404 );
    next( err );
});


// Global Error Handler 
app.use(( err, req, res, next ) => {
    if( !err.status ){
        err = new ExpressError( `Internal Server Error`, 500 );
    }
    res.status( err.status ).json({ error: err.message });
});


// Start Server 
app.listen( port, () => { console.log( `Server is running on port: ${ port }` )});