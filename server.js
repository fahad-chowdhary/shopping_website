const express = require("express");
const app = express();
const morgan = require('morgan')
const cors = require('cors');
const ProductData = require('./data');

const data  = {
    text: "Hello From Backend"
}

app.use(morgan('dev'));
app.use(cors());
app.get('/firstBackend', (req,res) =>{
    res.json(data)
    // res.send('first backend!')
})

app.get('/getProducts',(req,res) => {
    res.json(ProductData);
})


const port = 8081;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})



