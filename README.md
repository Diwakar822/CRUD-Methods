# CRUD Operations with Fetch API in JavaScript

This project demonstrates how to perform CRUD (Create, Read, Update, Delete) operations using the Fetch API in JavaScript. The application interacts with a sample RESTful API to showcase each operation.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Technologies Used

- JavaScript
- Fetch API
- HTML
- CSS (optional, if you have styles)
- [Your chosen REST API](#api-endpoints)

## Features

- **Create**: Add new entries to the database.
- **Read**: Retrieve and display entries.
- **Update**: Modify existing entries.
- **Delete**: Remove entries from the database.

 ==> Usage
 
Open your browser and navigate to index.html.
Use the provided interface to perform CRUD operations:
Create: Fill in the form and click "Add".
Read: View the list of entries displayed.
Update: Click on an entry to edit it and save changes.
Delete: Click the delete button next to an entry to remove it.

==> API Endpoints
This project interacts with the following mock API endpoints (replace with your actual endpoints):

GET: https://mocki.io/v1/your-get-endpoint - Retrieve all items.
POST: https://mocki.io/v1/your-post-endpoint - Create a new item.
PUT: https://mocki.io/v1/your-put-endpoint/:id - Update an existing item.
DELETE: https://mocki.io/v1/your-delete-endpoint/:id - Delete an item by ID.
Testing with Postman
You can use Postman to test the API endpoints independently of the application. Here’s how:

==> Open Postman.

Use the provided endpoints to test each CRUD operation:
For GET, select GET method and enter the GET endpoint.
For POST, select POST method, set the body to JSON, and enter your data.
For PUT, select PUT method, enter the ID in the URL, and update the body.
For DELETE, select DELETE method and enter the ID in the URL.

