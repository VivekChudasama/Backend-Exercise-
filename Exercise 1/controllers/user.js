let users = [
   {id : 1 , name: "Rahul" , age : 20 , number : 1234567890},
   {id : 2 , name : "Vikram" ,age : 20 , number : 1234567890},
   {id : 3 , name : "Rahul" , age : 20 ,  number : 1234567890},
   {id : 4 , name : "Aakash" ,age : 20 , number : 1234567890},
   {id : 5 , name : "Vikram" ,age : 20 , number : 1234567890}
];

exports.users1 = (req , res , next) => {
    res.json(users[0])
}

exports.getUserById = (req , res , next) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
}

exports.getAllUsers = (req , res , next) => {
   const newUser = {
    id: users.length + 1,
    name: req.params.name ,
    age : req.params.age,
    number : req.params.number
  };
  users.push(newUser);
  res.status(201).json(newUser);
}

exports.deleteUserById = (req , res , next) => {
    const userId = parseInt(req.params.id);
    const userfound = users.findIndex(u => u.id === userId);
    if (userfound != -1) {
        const delUser = users.splice(userfound, 1);
        res.status(204).send(delUser);  
    } 
    return res.status(404).json({ message: 'User not found' });F
    
}
