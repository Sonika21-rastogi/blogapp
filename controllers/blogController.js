const db = require('../config/db');

exports.getAllBlogs = (req,res) => {
    db.query('SELECT blogs.*, users.username FROM blogs JOIN users ON blogs.author_id = users.id', (err, result)=>{
        if(err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.createBlog = (req, res) =>{
    const {title, content} = req.body;
    const author_id = req.user.id;

    db.query('INSERT INTO blogs (title, content, author_id) VALUES (?,?,?)',[title, content,author_id], (err) => {
        if(err) return res.status(500).json(err);
        res.status(201).json({message:'Blog created'});
    });
    };

