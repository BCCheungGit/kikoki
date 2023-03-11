const Pool = require('pg').Pool;



const pool = new Pool({
    user: 'postgres',
    host: 'http://localhost',
    database: 'logindatabase',
    password: 'root',
    port: '5432'
});



module.exports = pool;