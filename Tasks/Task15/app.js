//main 
const express = require('express');
const app = express()
const Products = require('./Products.js');
const router  = require('./routes.js')
app.use(express.json())


app.use("/products",router)
app.use((req,res)=>{
    res.status(404).send("page not found")
})

app.listen(8000,()=>{
    console.log("running on port 3000")
})

