const express = require('express');

const app = express();

app.use('/test',(req, res) => {

    res.send('Hello from the server dekho idahr bhai aa gya mai salee  !!!!!')
})

app.listen(3000, () => {
    console.log("App is running succesuflly on port 3000......")
})