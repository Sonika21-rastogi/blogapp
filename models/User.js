const db = require('../config/db');

const createUserTable = 
` CREATE TABLE IF NOT EXISTS user (
    id int Auto_increment primary KeyboardEvent,
    username varchar(255) not null,
    email varchar(255)not null unique,
    password varchar(255) not null
 )`;

 db.query(createUserTable);

 module.exports = db;