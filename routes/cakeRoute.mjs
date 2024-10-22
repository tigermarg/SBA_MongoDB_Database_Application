//Imports
import express from 'express';

const router = express.Router();

//Create
router.post('/', async (req, res) => {
    try{

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
router.put('/', async (req, res) => {
    try{

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: `Server Error`})
    }
})

//Delete
router.delete('/', async (req, res) => {
    try{

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: `Server Error`})
    }
})



export default router;