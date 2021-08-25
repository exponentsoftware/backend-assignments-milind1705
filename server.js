const express = require('express');
const mongoose = require("mongoose");
const todo = require('./controller/todoController')
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
app.get('/', todo.getAll_item);
app.get('/:id', todo.get_item_ById);
app.post('/', todo.create_item);
app.put('/:id', todo.update_item);
app.delete('/:id', todo.delete_item)

app.listen(port, () =>{
    console.log(`server is running on port ${port}`)
})
