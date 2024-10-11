const fs = require('fs');
const express = require('express');
const { TodoErrors } = require('./todoErrors');

const port = 3000;
const app = express();
const data = "data2.json";

app.use(express.json());

function loadTodos() {
    let dataFile = null;
    try {
        dataFile = fs.readFileSync(data);
        return JSON.parse(dataFile);
    } catch (error) {
        console.error(error.message);
    }
}

function writeTodos(todos) {
    try {
        fs.writeFileSync(data, JSON.stringify(todos, null, 2));
    } catch (error) {
        console.error(error.message);
        throw new TodoErrors("Failed to save todos.");
    }
}

const todos = loadTodos();

app.get('/todos', (req, res) => {
    res.status(200).json(todos);
})

app.get('/todos/:id', (req, res) => {
    const { id } = req.params;

    const todo = todos.find(todo => todo.id === parseInt(id))

    if (todo) {
        res.status(200).json(todo);
    } else {
        res.status(404).json({ message: "Todo not found." });
    }
})

app.post('/todos', (req, res) => {
    const { title } = req.body;
    if (!title || title.trim()) {
        const id = todos.length + 1;
        const newTodo = {id: id, title: title, status: false};
        todos.push(newTodo);
        writeTodos(todos);
        res.status(201).json(newTodo);
    } else {
        res.status(400).json({ message: "Please provide a valid title."})
    }
    
})

app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({ message: "Please provide a valid title." })
    }

    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));

    if (todoIndex !== -1) {
        todos[todoIndex] = { ...todos[todoIndex], title };
        writeTodos(todos);
        res.status(200).json(todos[todoIndex]);
    } else {
        res.status(404).json({ message: "Todo not found." });
    }
})

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;

    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));

    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
        writeTodos(todos);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Todo not found." });
    }
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})