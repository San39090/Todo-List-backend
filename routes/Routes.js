const express = require('express')
const router = express.Router()
const Controllers = require("../controllers/Controllers.js")
const validate = require("../middlewares/Validate.js")

router.post('/',validate,Controllers.createTask);
router.get('/',Controllers.getAllTasks);
router.get('/:id',Controllers.getSingleTask);
router.put('/:id',validate,Controllers.updateTask);
router.delete('/:id',Controllers.deleteTask);

module.exports = router;