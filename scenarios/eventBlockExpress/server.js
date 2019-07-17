const express = require('express')
const app = express()
const port = 3000


app.get('/constant-time', (req, res) => {
    res.sendStatus(200);
});

app.get('/countToN', (req, res) => {
    let n = req.query.n;

    // n iterations before giving someone else a turn
    for (let i = 0; i < n; i++) {
        console.log(`Iter {$i}`);
    }

    res.sendStatus(200);
});


function addedExtraDelay(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(`Iter ${i}.${j}`);
        }
    }
}

app.get('/countToN2', (req, res) => {
    // n^2 iterations before giving someone else a turn
    addedExtraDelay(req.query.n);

    res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
