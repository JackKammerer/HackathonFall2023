const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) =>{
    res.send('hello there')

})

app.listen(port, () =>{
    console.log("Running on port 3000")
})