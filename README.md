# MongoDB Application Using Mongoose

### About
This application uses Node, Express and Mongoose to create schemas that are mapped to MongoDB documents. It contains a "desserts" collection with three different data categories (cake, ice cream and pie). Each schema is unique with appropriate data validation, and the documents are indexed based on frequently queried fields. The application allows for user GET, POST, PUT and DELETE requests and includes a seed route for sample data. 

### Technologies
Windows OS, VS Code

### How to Get Started
* Clone the repository
* Install Dependencies
<br>`npm install`
* npm start
<br>`npm start`
* Home URL
<br>`http://localhost:3000`
* Interact with the server through HTTP requests to retrieve data:
<br>- Cakes: `http://localhost:3000/cake`
<br>- Ice Creams: `http://localhost:3000/ice_cream`
<br>- Pies: `http://localhost:3000/pie`
* Use id parameters in PUT and DELETE requests.
<br>- Example: `http://localhost:3000/ice_cream/671809f47316c512437fa246`

### Built with:
* Node.js: https://nodejs.org/en/download/package-manager
<br>-- JavaScript runtime environment
* Express: https://expressjs.com/
<br>-- Node.js web application framework
* MongoDB: https://www.mongodb.com/
<br>-- Document database
* Mongoose: https://mongoosejs.com/
<br>-- Object Data Modeling (ODM) library for MongoDB and Node.js