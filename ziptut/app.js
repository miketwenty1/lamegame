const express = require('express')
const path = require('path')
const port = 3000

const app = express()
app.use(express.static(__dirname + '/'))

// app.get('/',function(req,res) {
//     res.sendFile(path.join(__dirname+'/'))
//   })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))