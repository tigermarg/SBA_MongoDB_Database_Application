//Imports
import express from 'express';
import Pie from '../models/pieSchema.mjs';

const router = express.Router();

//Create new cake
router.post('/', async (req, res) => {
    try{
        let newPie = new Pie(req.body);

        await newPie.save();

        res.json(newPie)

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: `Server Error`})
    }
})

//Get all cakes
router.get('/', async (req, res) => {
    try{
        let allPies = await Pie.find({})

        res.json(allPies)

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: `Server Error`})
    }
})

//Update cake by id
router.put('/:id', async (req, res) => {
    try{
        let updatedPie = await Pie.findByIdAndUpdate(req.params.id, req.body, {new: true})

        res.json(updatedPie)

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: `Server Error`})
    }
})

//Delete cake by id
router.delete('/:id', async (req, res) => {
    try{
        let deletedPie = await Pie.findByIdAndDelete(req.params.id)

        res.json(deletedPie)

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: `Server Error`})
    }
})

//Export
export default router;