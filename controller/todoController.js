const Todo = require('../models/todo')
const Category = require('../models/category');

module.exports.create_item = async (req, res) => {
    const category = await Category.findOne({_id: req.params.categoryid})
    const newItem = new Todo(req.body);

    newItem
        .save()
        .then((data) =>{
            return res.status(200).json({data});
        })
        .catch((err) =>{
            return res.status(400).json(err)
        })

        //associate with category

        category.todo.push(newItem._id)
        await category.save();
        console.log(category);
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

