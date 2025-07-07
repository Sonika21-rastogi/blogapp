const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blog');

const app = express();
dotenv.config();

// heefewvbk
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/create')

app.get('/',(req,res)=>{
    res.send('Welcome');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
 }
);