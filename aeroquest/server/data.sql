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


-- Create Airplane Table 
CREATE TABLE airplanes (
    id SERIAL PRIMARY KEY,
    registration_number VARCHAR( 255 ) NOT NULL,
    production_line VARCHAR( 255 ) NOT NULL,
    model_name VARCHAR( 255 ) NOT NULL,
    model_code VARCHAR( 255 ) NOT NULL, 
    icao_code_hex VARCHAR( 255 ) NOT NULL, 
    construction_number VARCHAR( 255 ) NOT NULL, 
    rollout_date DATE NOT NULL,
    first_flight_date DATE NOT NULL, 
    delivery_date DATE NOT NULL,
    plane_series VARCHAR( 255 ) NOT NULL,
    plane_owner VARCHAR( 255 ) NOT NULL, 
    engine_count INTEGER NOT NULL, 
    engines_type VARCHAR( 255 ) NOT NULL, 
    plane_age INTEGER NOT NULL, 
    plane_status VARCHAR( 255 ) NOT NULL,
    date_added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);



-- Create Airline Table 
CREATE TABLE airlines (
    id SERIAL PRIMARY KEY,
    airline_name VARCHAR( 100 ) NOT NULL, 
    iata_code VARCHAR( 3 ) NOT NULL, 
    callsign VARCHAR( 50 ) NOT NULL, 
    status VARCHAR( 10 ) NOT NULL, 
    fleet_size INTEGER NOT NULL,
    fleet_average_age DECIMAL( 5, 2 ) NOT NULL, 
    date_founded DATE NOT NULL, 
    country_name VARCHAR( 100 ) NOT NULL 
);



-- Create Airport Table 
CREATE TABLE airports (
    id SERIAL PRIMARY KEY,
    airport_name VARCHAR(255) NOT NULL,
    iata_code VARCHAR(3) NOT NULL,
    icao_code VARCHAR(4) NOT NULL,
    latitude DECIMAL(8, 5) NOT NULL,
    longitude DECIMAL(9, 5) NOT NULL,
    geoname_id VARCHAR(10) NOT NULL,
    timezone VARCHAR(50) NOT NULL,
    gmt VARCHAR(5) NOT NULL,
    phone_number VARCHAR(20),
    country_name VARCHAR(255) NOT NULL,
    country_iso2 VARCHAR(2) NOT NULL,
    city_iata_code VARCHAR(3) NOT NULL
);


