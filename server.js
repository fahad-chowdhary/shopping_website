const express = require("express");
const app = express();
const morgan = require('morgan')

const data  = {
    text: "Hello From Backend"
}

app.use(morgan('dev'));
app.get('/firstBackend', (req,res) =>{
    res.json(data)
    // res.send('first backend!')
})



const port = 8080;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})



