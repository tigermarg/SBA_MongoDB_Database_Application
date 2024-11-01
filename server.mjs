//Imports
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './db/conn.mjs';
import cakeRoute from './routes/cakeRoute.mjs';
import iceCreamRoute from './routes/iceCreamRoute.mjs';
import pieRoute from './routes/pieRoute.mjs';
import IceCream from './models/iceCreamSchema.mjs'
import { iceCreamData } from './data/iceCreamData.mjs';

//Setups
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001;

//DB Connection
connectDB();

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//Routes
app.use('/cake', cakeRoute);
app.use('/ice_cream', iceCreamRoute);
app.use('/pie', pieRoute);

//Seed route
// app.get('/seed', async (req, res) => {
//     //Delete data  
//     await Produce.deleteMany({})
//     // Create items in database
//     await IceCream.create(iceCreamData)
//     res.json(iceCreamData)
//   });

//Listen
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})