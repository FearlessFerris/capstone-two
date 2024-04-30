// Setup Database Connection 

const { Client } = require( 'pg' );
const { connectionString } = require('pg/lib/defaults');

let DB_URI;

if( process.env.NODE_ENV === 'test' ){
    DB_URI = 'postgresql:///aeroquest_test';
}
else{
    DB_URI = 'postgresql:///aeroquest';
}

let db = new Client({
    // connectionString: DB_URI,
    username: 'marcus',
    password: 'Civil392601*',
    host: 'localhost',
    database: 'aeroquest',
    port: 5432
});

db.connect();
module.exports = db;
