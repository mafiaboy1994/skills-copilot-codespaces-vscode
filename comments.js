// Create web server
// Use express
// Create a RESTful API
// Create a GET endpoint for /comments
// Create a POST endpoint for /comments
// Create a DELETE endpoint for /comments/:id
// Create a PUT endpoint for /comments/:id
// Create a GET endpoint for /comments/:id
// Create a GET endpoint for /comments/:id/author
// Create a GET endpoint for /comments/:id/author/:author_id

const express = require('express');
const app = express();
const port = 3000;

let comments = [
    {
        id: 1,
    }
];
    