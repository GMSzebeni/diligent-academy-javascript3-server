const fs = require('fs');
const express = require('express');

const port = 3000;
const app = express();
const data = "data2.json";

app.use(express.json());

function loadTodos() {
    const dataFile = fs.readFileSync(data);
    return JSON.parse(dataFile);
}

function writeTodos(todos) {
    fs.writeFileSync(data, JSON.stringify(todos, null, 2));
}

const todos = loadTodos();

app.get('/todos', (req, res) => {
    res.json(todos);
})

/*app.get('/todo/:id', (req, res) => {
    const { id } = req.params;
    const todo = todos.find(todo => todo.id === parseInt(id));  // Fixed comparison and parsing ID
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
})*/

/* app.get('/todos/:id', (req, res) => {
    const { id } = req.params;

    const todo = todos.find(todo => todo.id === parseInt(id))

    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
}) */

/* app.post('/todos', (req, res) => {
    const { title } = req.body;
    const id = todos.length + 1;
    const newTodo = {id: id, title: title, status: false};
    todos.push(newTodo);
    writeTodos(todos);
    res.json(todos);
}) */



app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})