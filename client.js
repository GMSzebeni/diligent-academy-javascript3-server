const prompt = require('prompt-sync')(); //függvényt meghívva tudunk kérni promptot, ezért kell a plusz zárójel

/* fetch('http://localhost:3000')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    }) */

/*fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })

fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })*/

/*fetch('http://localhost:3000/users?name=john')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })*/

/* fetch('http://localhost:3000/users', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: "Bob Marley"})
})
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    }) */

/* fetch('http://localhost:3000/users/1', {
    method: 'PUT', 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: "Bob Marley"})
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    }) */

fetch('http://localhost:3000/users/1', {
    method: 'DELETE'
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })