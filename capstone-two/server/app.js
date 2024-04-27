// Express Server Implementation 


// Dependencies 
const express = require( 'express' );
const app = express();
const port = process.env.PORT || 3000;
const db = require( './db' );


// Middleware 
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// Routes 



// Start Server 
app.listen( port, () => { console.log( `Server is running on port: ${ port }` )});