// Express Server Implementation 


// Dependencies 
const express = require( 'express' );
const app = express();
const port = process.env.PORT || 3000;

// Middleware 
app.use( express.json() );


// Routes 
app.get( '/', ( req, res ) => {
    return res.send( 'Welcome to my Applications Homepage!!!' );
});

// Lets demonstrate an example that accesses a passed in URL Parameter 
app.get( '/:username', ( req, res ) => {
    console.log( req.params );
    return res.send( `Greetings ${ req.params.username }` );
});

// We can also set multiple URL Parameters at once 
app.get( '/:model/:color/:age', ( req, res ) => {
    console.log( req.params )
    const { model, color, age } = req.params;
    return res.send( `Vehicle Model: ${ model } || Vehicle Color: ${ color } || Vehicle Age: ${ age }` )
});


// Start Server 
app.listen( port, () => { console.log( `Server is running on port: ${ port }` )});