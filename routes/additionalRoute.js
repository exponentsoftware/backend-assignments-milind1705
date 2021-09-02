const express = require('express');
const router = express.Router();
const todo = require("../controller/querry");

router.get('/', todo.get_items);
router.get('/sort', todo.sort_item)
router.get('/sort/latest', todo.sort_item2);
router.get('/work', todo.get_item_Cat_work);
router.get('/title', todo.get_items_bytitle)
router.get('/page', todo.get_items_pageTwo)
//router.get('/:categoryid', category.get_cat_ById);
module.exports = router;