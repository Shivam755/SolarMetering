const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin','*');
    next();
});
app.listen(3000, ()=>{
  console.log("listening to port 3000.")
});

export default express;