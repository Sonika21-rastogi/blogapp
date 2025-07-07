const db = require('../config/db');

const createBlogTable =`
CREATE TABLE IF NOT EXISTS blogs (
id int AUTO_INCREMENT PRIMARY KEY,
title varchar(255),
conten varchar(255),
author_id int,
created_at timestamp default current_timestamp,
foreign key (author_id) refrences user(id)
)`;

db.query(createBlogTable);

module.exports = db;