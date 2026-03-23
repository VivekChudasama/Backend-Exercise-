const userService = require('../services/user');

//get ALL users 
exports.getUsers = (req, res, next) => {
    try{
        const users = userService.getAllUsers();
        res.json(users);
    }
    catch(err){
        console.log(err)
    }
}

//get user by id
exports.getUserById = (req, res, next) => {
    try{
         const userId = parseInt(req.params.id);
        const user = userService.findUserById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
    }
    catch(err) {
        console.log(err)
    }
   
}

// create a new user
exports.createUser = (req, res, next) => {
    try {
        const { name, age, number } = req.query; 
        const newUser = userService.CreateUser({ name, age, number });
        res.status(201).json(newUser);
    } catch (err) {
        console.log(err)
    }
}

// delete user by id
exports.deleteUser = (req, res, next) => {
    try {
        const userId = parseInt(req.params.id);
        const deletedUser = userService.deleteUserById(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(deletedUser);
    } catch (err) {
        console.log(err)
    }
}