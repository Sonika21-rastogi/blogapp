const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query('INSERT INTO users (username,email, password) values (?,?,?)', [username, email, hashedPassword], (err) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: 'User registerd' });
    });
};


exports.login = async (req, res) => {
    const { email, password } = req.body;
    const hasedPassword = await bcrypt.hash(password, 10);
    db.query('insert into ulogin (email,password) values (?,?)', [email, hasedPassword], (err) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: 'User Login' });
    });
};