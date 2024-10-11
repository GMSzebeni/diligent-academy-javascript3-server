const prompt = require('prompt-sync');

/* fetch('http://localhost:3000/todos')
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error("Error: ", error);
})  */

/* fetch('http://localhost:3000/todos/1')
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error("Error: ", error);
}) */

/* fetch('http://localhost:3000/todos', {
    method: "POST",
    headers: { "Content-Type" : "application/json" },
    body: JSON.stringify({ title: "learn JS"})
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error("Error: ", error);
}) */

/* fetch('http://localhost:3000/todos/3', {
    method: "PUT",
    headers: { "Content-Type" : "application/json" },
    body: JSON.stringify({ title: "learn TS" })
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error("Error: ", error);
}) */

fetch('http://localhost:3000/todos/3', {
    method: "DELETE"
})
.then(response => {
    if (response.status === 404) {
        return response.json();
    } else {
        return response.status;
    }
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error("Error: ", error);
})