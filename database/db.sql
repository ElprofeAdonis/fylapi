CREATE DATABASE adluis;

CREATE TABLE user(
   id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL 
);