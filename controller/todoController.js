const Todo = require('../models/todo')

module.exports.create_item = (req, res) => {
    const newItem = new Todo(req.body);

    newItem
        .save()
        .then((data) =>{
            return res.status(200).json({data});
        })
        .catch((err) =>{
            return res.status(400).json(err)
        })
}

module.exports.getAll_item = (req, res) => {
    Todo.find()
        .then((data) =>{
            return res.status(200).json(data);
        })
        .catch((err) =>{
            return res.status(400).json(err)
        })
}

module.exports.get_item_ById = (req, res) => {
    Todo.findById({_id: req.params.id})
        .then((data) =>{
            return res.status(200).json(data);
        })
        .catch((err) =>{
            return res.status(400).json(err)
        })
}


module.exports.update_item = (req, res) => {
    Todo.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Todo.findOne({_id: req.params.id})
        .then((data) =>{
            return res.status(200).json(data);
        })
        .catch((err) =>{
            return res.status(400).json(err)
        })
    })
}

module.exports.delete_item = (req, res) => {
    Todo.findByIdAndDelete({_id: req.params.id})
        .then(() =>{
            return res.status(200).json("Item successfully deleted");
        })
        .catch((err) =>{
            return res.status(400).json(err)
        })
}

