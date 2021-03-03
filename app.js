const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server Running!!')
})

app.get('/', (req, res) => {
    return res.send('Hello World')
})
