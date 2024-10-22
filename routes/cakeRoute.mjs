//Imports
import express from 'express';
import Cake from '../models/cakeSchema.mjs';

const router = express.Router();

//Create
router.post('/', async (req, res) => {
    try{
        let newCake = new Cake(req.body);

        await newCake.save();

        res.json(newCake)

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: `Server Error`})
    }
})

//Read
router.get('/', async (req, res) => {
    try{

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: `Server Error`})
    }
})

//Update
router.put('/:id', async (req, res) => {
    try{

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: `Server Error`})
    }
})

//Delete
router.delete('/:id', async (req, res) => {
    try{

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: `Server Error`})
    }
})



export default router;