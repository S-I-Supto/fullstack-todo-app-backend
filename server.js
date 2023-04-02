const express = require('express')
const app = express()
const router = require('./routes/route')
const cors = require('cors')
const port = 5000
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => { console.log('server is listening on  port ' + port) })