const express = require('express')
const app = express()
const router = express.Router()
const todoModel = require('../model/todoModel')

router.get('/', async (req, res) => {
    const data = await todoModel.find()
    res.send(data)
})
router.post('/create', async (req, res) => {
    const body = new todoModel(req.body);
    const data = await body.save();
    res.send(data)
})

router.put('/update', async (req, res) => {
    const { id } = req.body;
    const data = await todoModel.updateOne({ _id: id }, {
        $set: req.body
    })
    res.send(data)
})

router.delete('/delete/:id', async (req, res) => {
    let id = req.params.id;
    console.log(id)
    const deleteData = await todoModel.deleteOne({ _id: id })
    res.send(deleteData)
})

module.exports = router