const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Almacenar los usuarios en memoria
let usuarios = [];

app.post('/registrar', function(req, res) {
    const { username, password } = req.body;
    
    usuarios.push({ username, password });
    res.send('Usuario registrado con éxito.');
});

app.post('/iniciar_sesion', function(req, res) {
    const { username, password } = req.body;
    const usuario = usuarios.find(u => u.username === username && u.password === password);
    if (usuario) {
        res.send('Inicio de sesión exitoso.');
    } else {
        res.send('Inicio de sesión fallido.');
    }
});

app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});