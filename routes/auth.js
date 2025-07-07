const express = require('express');
const router = express.Router();
const {register, login} = require('../controllers/authController');

router.post('/register',async(req,res)=>{
await register(req,res);
 console.log(req.body);
} );

router.post('/login',async(req,res)=>{
    await login(req,res);
    console.log(req.body);
} );

module.exports = router;
