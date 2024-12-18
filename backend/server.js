const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 3001;

app.use(cors());

app.get("/", (req, res) =>{
    res.send("Hello from backend");
});

app.listen(PORT, ()=> 
    console.log("SERVER running on http://localhost:${PORT}")
);