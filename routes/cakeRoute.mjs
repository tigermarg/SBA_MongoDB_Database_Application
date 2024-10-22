//Imports
import express from 'express';
import Cake from '../models/cakeSchema.mjs';

const router = express.Router();

//Create new cake
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

//Get all cakes
router.get('/', async (req, res) => {
    try{
        let allCakes = await Cake.find({})

        res.json(allCakes)

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: `Server Error`})
    }
})

//Update cake by id
router.put('/:id', async (req, res) => {
    try{
        let updatedCake = await Cake.findByIdAndUpdate(req.params.id, req.body, {new: true})

        res.json(updatedCake)

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: `Server Error`})
    }
})

//Delete cake by id
router.delete('/:id', async (req, res) => {
    try{
        let deletedCake = await Cake.findByIdAndDelete(req.params.id)

        res.json(deletedCake)

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: `Server Error`})
    }
})

//Export
export default router;