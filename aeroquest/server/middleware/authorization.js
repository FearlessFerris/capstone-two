// Authentification Middleware Implementation 

// Dependencies 
const jwt = require( 'jsonwebtoken' );


// Components / Necessary Files 
const SECRET_KEY = require( '../config' );


const authorizationMiddleware = ( req, res, next ) => {
    const token = req.headers.authorization;
    if( !token ){
        return res.status( 401 ).json({ message: 'Authorization Token is required!' })
    }

    try{
        const decoded = jwt.verify( token, SECRET_KEY );
        req.user = decoded;
        next();
    }
    catch( error ){
        return res.status( 401 ).json({ message: 'Invalid Token' });
    }
}

module.exports = authorizationMiddleware;