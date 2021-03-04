const express = require('express');
const app = express();

listaUsuarios = [
    'Silvio',
    'Nykolle',
    'Ivens',
    'Nicolas',
    'Natalia',
    'Jailson'
]


// Query Params
// ex.: localhost:3000/usuarios?nome=Silvio
app.get('/usuarios/', (req, res) => {
    const { nome } = req.query;
    let listaRetorno = listaUsuarios.filter(i => i === nome)
    return res.json(listaRetorno)
})


// Route Params
app.get('/:usuario', (req, res) => {
    const { usuario } = req.params;
    return res.send(`Hello World ${usuario}`)
    // return res.send(`Hello World ${req.params.usuario}`)
})



app.listen(3000, () => {
    console.log('Server Running!!')
})