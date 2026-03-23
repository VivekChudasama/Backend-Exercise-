const express = require('express');
const router = express.Router();
const controller = require('../controllers/user')

//get user 1
router.get('/users' , controller.getUsers)

//get user by id
router.get('/:id' , controller.getUserById)

//create user
router.post('/create' , controller.createUser)

//delete user
router.delete('/delete/:id' , controller.deleteUser)


module.exports = router