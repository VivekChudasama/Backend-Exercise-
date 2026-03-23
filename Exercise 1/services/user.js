const users = [
    { id: 1, name: "Rahul", age: 20, number: 1234567890 },
    { id: 2, name: "Vikram", age: 20, number: 1234567890 },
    { id: 3, name: "Rahul", age: 20, number: 1234567890 },
    { id: 4, name: "Aakash", age: 20, number: 1234567890 },
    { id: 5, name: "Vikram", age: 20, number: 1234567890 }
];

// Get all users
exports.getAllUsers = () => {
    return users;
};

// Get a single user by ID
exports.findUserById = (id) => {
    return users.find(u => u.id === id);
};

//create user
exports.CreateUser = (userData) => {
    const newUser = {
        id: users.length + 1,
        ...userData
    };
    users.push(newUser);
    return newUser;
}

//delete user
exports.deleteUserById = (id) => {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return null;
    const removedUser = users.splice(index, 1);
    return removedUser;
}

exports.user = users
