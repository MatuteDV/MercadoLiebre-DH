const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/', (req, res) => {
    // res.send(req.body);
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/register', (req, res) => {   // Sólo de prueba sin uso.
    res.send(req.body);
});



app.listen(3000, ()=> { console.log('Escuchando en el puerto 3000') })

