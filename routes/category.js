const express = require('express');
const router = express.Router();
const category = require("../controller/categoryController");

router.get('/', category.getAll_category);
router.get('/:categoryid', category.get_cat_ById);
router.post('/', category.create_category);
router.put('/:id', category.update_cate);
router.delete('/delete/:id', category.delete_category)

module.exports = router;
