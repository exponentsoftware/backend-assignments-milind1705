const express = require('express');
const router = express.Router();
const todo = require("../controller/querry");

router.get('/', todo.get_items);
router.get('/sort', todo.sort_item)
router.get('/sort/latest', todo.sort_item2)
//router.get('/:categoryid', category.get_cat_ById);
module.exports = router;