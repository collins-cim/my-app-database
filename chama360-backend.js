const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chama360_db'
});

db.connect((err) => {
    if (err) {
        console.log('Database connection failed');
        return;
    }
    console.log('Database connected successfully');
});

app.get('/', (req, res) => {
    res.send('Chama360 Backend Running');
});

app.get('/members', (req, res) => {
    db.query('SELECT * FROM members', (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});