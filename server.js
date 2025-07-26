
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

//rest object
const app = express();

//middleware
app.use(express.json())
app.use(morgan('dev'))

//environment variables
dotenv.config();


//route
app.use('/home',require('./routes/testRoutes'))

//port number
    const PORT = process.env.PORT

//listening to the server
app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)})