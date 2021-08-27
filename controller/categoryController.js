const Category = require('../models/category')
module.exports.create_category = (req, res) => {
    const newCategory = new Category(req.body);

    newCategory
        .save()
        .then((data) =>{
            return res.status(200).json({data});
        })
        .catch((err) =>{
            return res.status(400).json(err)
        })
}

module.exports.getAll_category = (req, res) => {
    Category.find()
        .then((data) =>{
            return res.status(200).json(data);
        })
        .catch((err) =>{
            return res.status(400).json(err)
        })
}

module.exports.get_cat_ById = (req, res) => {
    Category.findById({_id: req.params.categoryid}).populate("todo")
        .then((data) =>{
            return res.status(200).json(data);
        })
        .catch((err) =>{
            return res.status(400).json(err)
        })
}


module.exports.update_cate = (req, res) => {
    Category.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Category.findOne({_id: req.params.id})
        .then((data) =>{
            return res.status(200).json(data);
        })
        .catch((err) =>{
            return res.status(400).json(err)
        })
    })
}

module.exports.delete_category = (req, res) => {
    Category.findByIdAndDelete({_id: req.params.id})
        .then(() =>{
            return res.status(200).json("Category successfully deleted");
        })
        .catch((err) =>{
            return res.status(400).json(err)
        })
}



