const express = require('express');
const router = express.Router();
const todo = require("../controller/todoController");
const checkAuth = require('../middleware/userAuth')

router.get('/', checkAuth, todo.getAll_item);
router.get('/:todoid', checkAuth, todo.get_item_ById);
router.post('/:categoryid',checkAuth, todo.create_item);
router.put('/:id',checkAuth, todo.update_item);
router.delete('/:id',checkAuth, todo.delete_item)

module.exports = router;
