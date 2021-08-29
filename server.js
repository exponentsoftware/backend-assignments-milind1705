require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const todoRouter = require('./routes/todo');
const categoryRouter = require('./routes/category')
const querryRouter = require('./routes/additionalRoute')
const userRouter = require('./routes/user')
const port = 3000;

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todo',{
    useNewUrlParser:true,
    useUnifiedTopology : true
})
mongoose.connection.once('open', () =>{
    console.log('connected with database')
});

//routes
app.use('/todo', todoRouter);
app.use('/category', categoryRouter);
app.use('/additional', querryRouter)
app.use('/user', userRouter)
app.listen(port, () =>{
    console.log(`server is running on port ${port}`)
})
