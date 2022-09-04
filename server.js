const express = require("express");
const app = express();
const morgan = require('morgan')
const cors = require('cors');

const data  = {
    text: "Hello From Backend"
}
const products ={
    
}

app.use(morgan('dev'));
app.use(cors());
app.get('/firstBackend', (req,res) =>{
    res.json(data)
    // res.send('first backend!')
})



const port = 8081;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})



