const mongoose = require('mongoose')
const dotnev = require('dotenv')
dotnev.config()

const mongourl = process.env.MONGODB_URL
mongoose.connect(mongourl)
const productSchema = new mongoose.Schema({
    data: String,
})
module.exports = mongoose.model('todoapp', productSchema)