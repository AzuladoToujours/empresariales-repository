const express = require ('express')

const app = express()

app.get("/:name", (req,res) =>{
    var name = req.params.name
    res.status(200).send(`Hello ${name} from Node-Heroku`)
})

var port= process.env.PORT || 3000
app.listen(port, () =>{
    console.log(`Running in port ${port}`)
})