-- Create Database 

DROP DATABASE IF EXISTS avation_stack;

CREATE DATABASE avation_stack;

\c avation_stack;


-- Create User Table 
CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    username VARCHAR( 100 ) UNIQUE NOT NULL,
    password VARCHAR NOT NULL, 
    email VARCHAR NOT NULL,
    dob DATE,
    image_url VARCHAR 
);


-- Create Searche Table 
CREATE TABLE search (
    id SERIAL PRIMARY KEY,
    search_term VARCHAR NOT NULL, 
    search_timestamp TIMESTAMP NOT NULL
)


-- Create Page Table 
CREATE TABLE page (
    id SERIAL PRIMARY KEY,
    page_title VARCHAR NOT NULL,
    page_link VARCHAR NOT NULL, 
    last_visited TIMESTAMP
)



