require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { createUser,getUsers }  = require('./controller/user');
const app = express();

const PORT = process.env.PORT;
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());

app.get("/api/v1/users",async (req, res) => {
    try {
        const response = await getUsers();
    
        res.status(200).json({
            status: 'success',
            data: response
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err })
    }
});
app.post("/api/v1/user", async (req, res) => {
    try {
        const response = await createUser(req.body);
    
        res.status(200).json({
            status: 'success',
            data: response
        });
    } catch (err) {
        res.status(500).json({ error: err })
    }
});


app.listen(PORT,()=> console.log(`API is up and running in port ${PORT}`))


