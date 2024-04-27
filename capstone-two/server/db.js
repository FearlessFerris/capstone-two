// Setup Database Connection 

const { Pool } = require( 'pg' );
require( 'dotenv' ).config();


const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.emv.DB_NAME,
    port: 5432,
});

module.exports = pool;