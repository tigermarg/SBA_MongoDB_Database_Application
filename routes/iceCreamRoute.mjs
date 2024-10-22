//Imports
import express from 'express';
import IceCream from '../models/iceCreamSchema.mjs';

const router = express.Router();

//Create new cake
router.post('/', async (req, res) => {
    try{
        let newIceCream = new IceCream(req.body);

        await newIceCream.save();

        res.json(newIceCream)

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: `Server Error`})
    }
})

//Get all cakes
router.get('/', async (req, res) => {
    try{
        let allIceCream = await IceCream.find({})

        res.json(allIceCream)

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: `Server Error`})
    }
})

//Update cake by id
router.put('/:id', async (req, res) => {
    try{
        let updatedIceCream = await IceCream.findByIdAndUpdate(req.params.id, req.body, {new: true})

        res.json(updatedIceCream)

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: `Server Error`})
    }
})

//Delete cake by id
router.delete('/:id', async (req, res) => {
    try{
        let deletedIceCream = await IceCream.findByIdAndDelete(req.params.id)

        res.json(deletedIceCream)

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: `Server Error`})
    }
})

//Export
export default router;
