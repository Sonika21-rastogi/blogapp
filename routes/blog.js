const express = require('express');
const router  = express.Router();

const {createBlog ,getAllBlogs} = require('../controllers/blogController');
const auth = require('../middleware/auth')

router.get('/',getAllBlogs);

router.post('/create',auth, createBlog);

module.exports = router;