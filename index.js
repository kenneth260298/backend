const express = require('express')
const app = express()
const port = 3000

app.get('/', (_, res) => {
    return res.send('Hola Mundo')
})

app.listen(port, () => {
    console.log(`API corriendo en el puerto ${port}`)
})