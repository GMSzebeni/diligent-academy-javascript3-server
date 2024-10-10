//import fs from 'fs';

const fs = require('fs');
//const prompt = require('prompt-sync')(); //függvényt meghívva tudunk kérni promptot, ezért kell a plusz zárójel

//console.log(JSON.parse(fs.readFileSync('data.json', 'utf8')));

/* const newContent = {
    name: "John Doe"
} 

fs.writeFileSync('data.json', JSON.stringify(newContent, null, 8));*/

/*const content = prompt();

fs.writeFileSync('data.json', JSON.stringify(content, null, 1));*/

const express = require('express');

/*const port = 3000;
const app = express();

app.get('/', (req, res) => {
    const user = {
        name: "john Doe",
        age: 30,
        city: "Budapest"
    }

    res.json(user);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});*/

const port = 3000;
const app = express();
app.use(express.json());

const users = [
    {id: 1, name: "John Smith"},
    {id: 2, name: "Lisa Davis"},
    {id: 3, name: "Sally Johnson"}
];

/*const products = [
    {id: 1, name: "Phone"},
    {id: 2, name: "Laptop"},
    {id: 3, name: "Headset"}
];*/

/*app.get("/users", (req, res) => {
    const {name} = req.query;
    const result = users.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()));
    res.json(result);
})*/

/*app.get('/products', (req, res) => {
    res.json(products);
})*/

/* app.post("/users", (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
})*/

/* app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;

    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if (userIndex !== -1) {
        users[userIndex] = {...users[userIndex], ...updatedUser};
        res.json(users[userIndex]);
    } else {
        res.status(404).json({message: "User not found."})
    }
}) */

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if (userIndex !== -1) {
        users.splice(userIndex, 1);

        res.json({
            message: 'User is deleted',
            users: users
        });
    } else {
        res.status(404).json({message: "User not found."})
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}); 