# MongoDB Application Using Mongoose

### About
This application uses Node, Express and Mongoose to create schemas that are mapped to MongoDB documents. It contains a "desserts" collection with three different data categories (cake, ice cream and pie). Each schema is unique with appropriate data validation, and the documents are indexed based on frequently queried fields. The application allows for user GET, POST, PUT and DELETE requests and includes a seed route for sample data. 

### Technologies
Windows OS, VS Code

### How to Get Started
* Clone the repository
* Install Dependencies: `npm install`
* npm start: `npm start`
* Interact with the server through HTTP requests to retrieve data:

| Endpoint | Description |
| --- | --- 
| `localhost:3000` | Home URL |
| `localhost:3000/cake` | HTTP request for *cake* data |
| `localhost:3000/ice_cream` | HTTP request for *ice cream* data |
| `localhost:3000/pie` | HTTP request for *pie* data |
| `localhost:3000/ice_cream/671809f47316c512437fa246` | Sample id parameter for PUT & DELETE requests |

### Built with:
* Node.js: https://nodejs.org/en/download/package-manager
<br>-- JavaScript runtime environment
* Express: https://expressjs.com/
<br>-- Node.js web application framework
* MongoDB: https://www.mongodb.com/
<br>-- Document database
* Mongoose: https://mongoosejs.com/
<br>-- Object Data Modeling (ODM) library for MongoDB and Node.js