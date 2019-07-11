// receive notification from nsolid-console

const express = require('express')
const app = express()
app.use(express.json());
const port = 3008

app.post('/', function (req, res) {
    console.log('req --------', JSON.stringify(req.body), req.params)
    res.send('POST request to homepage')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
