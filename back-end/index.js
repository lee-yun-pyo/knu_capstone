const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

const port = 4000;
app.listen(port, ()=>{
    console.log("server", port)
})

//프론트에서 사용할때
app.use('/api/broccoli', require('./routes/broccoliRouter'));
