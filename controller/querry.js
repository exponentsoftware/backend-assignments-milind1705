const Todo = require('../models/todo')
const Category = require('../models/category');

module.exports.get_items = (req, res) => {
    Todo.find({}, { _id:0, __V:0}).then((data) =>{
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

module.exports.get_item_Cat_work= (req, res) => {
    Todo.find({category : "task"})
        .then((data) =>{
            return res.status(200).json(data);
        })
        .catch((err) =>{
            return res.status(400).json(err)
        })
}
// module.exports.get_items_onepage = (req, res) => {
//     Todo.find({}).limit(4).then((data) =>{
//         res.send(data)
//     }).catch((err) => {
//         res.send(err)
//     })
// }
module.exports.get_items_pageTwo = (req, res) => {
   
  Todo.find({}).then((data) => {
        
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1)* limit;
    const endIndex = page * limit

   const results =  {}
  if(endIndex< data.length){
    results.next = {
        page: page + 1,
        limit: limit
    }
  }
  
  if(startIndex > 0){
    results.previos = {
        page: page - 1,
        limit: limit
    }
  }
   results.results = data.slice(startIndex, endIndex)


   return res.json(results)
});
}

module.exports.get_items_bytitle = (req, res) => {
    Todo.find({}, { _id:false}).then((data) =>{
        const title = req.query.title;
        if(data.title == title){

          return  res.send(data)
        }
    }).catch((err) => {
        res.send(err)
    })
}