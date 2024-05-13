-- Create Database 

DROP DATABASE IF EXISTS aeroquest;

CREATE DATABASE aeroquest;

\c aeroquest;


-- Create User Table 
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR( 100 ) UNIQUE NOT NULL,
    password VARCHAR( 255 ) NOT NULL, 
    email VARCHAR( 255 ) NOT NULL,
    dob DATE,
    image_url VARCHAR( 255 ),
    image_upload VARCHAR( 255 )
);


-- Create Search Table 
CREATE TABLE searches (
    id SERIAL PRIMARY KEY,
    search_term VARCHAR( 255 ) NOT NULL, 
    search_timestamp TIMESTAMP NOT NULL
);


-- Create API Response Table 
CREATE TABLE api_responses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    endpoint VARCHAR(100) NOT NULL,
    response_data JSONB NOT NULL,
    response_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Create Bookmarks / Favorites Table 
CREATE TABLE bookmarks (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    api_response_id INTEGER,
    label VARCHAR(100),
    notes TEXT,
    CONSTRAINT fk_api_response_id FOREIGN KEY (api_response_id) REFERENCES api_responses(id),
    CONSTRAINT unique_api_response_id UNIQUE (api_response_id)
);


-- Create Activity Logs Table 
CREATE TABLE activity_logs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    action_type VARCHAR(100),
    action_details JSONB,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



