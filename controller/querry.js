const Todo = require('../models/todo')
const Category = require('../models/category');

module.exports.get_items = (req, res) => {
    Todo.find({}, {title:true, _id:false}).then((data) =>{
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
}
module.exports.sort_item = (req, res) => {
    Todo.find({}).sort("createdAt").then((data) =>{
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
}
module.exports.sort_item2 = (req, res) => {
    Todo.find({}).sort("-createdAt").then((data) =>{
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
}

module.exports.get_item_Bytitle = (req, res) => {
    Todo.findOne({title:title}, req.params.title)
        .then((data) =>{
            return res.status(200).json(data);
        })
        .catch((err) =>{
            return res.status(400).json(err)
        })
}
