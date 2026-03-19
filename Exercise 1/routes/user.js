const express = require('express');
const router = express.Router();
const controller = require('../controllers/user')

//get user 1
router.get('/user1' , controller.users1)

//get user by id
router.get('/user/:id' , controller.getUserById)

//create user
router.post('/user/create' , controller.CreateUsers)

//delete user
router.delete('/user/delete/:id' , controller.deleteUserById)


module.exports = router