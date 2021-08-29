const express = require('express');
const router = express.Router();
const todo = require("../controller/todoController");

router.get('/', todo.getAll_item);
router.get('/:id', todo.get_item_ById);
router.post('/:categoryid', todo.create_item);
router.put('/:id', todo.update_item);
router.delete('/:id', todo.delete_item)

module.exports = router;