const express = require('express');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());
const pool = require('./databases');

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    pool.query("SELECT * from logindatatable WHERE email = $1 AND password = $2", 
    [email, password],
    (err, result) => {
        if (err) {
            res.send({err: err});
        }
        if (result.rowCount > 0) {
            res.send(result.rows);
        }
        else {
            res.send({message: "Invalid Username or Password"})
        }

    }
    )
})

const port = process.env.PORT || 5432;

app.listen(port, () => console.log(`Server running on port ${port}, http//localhost:${port}`));

