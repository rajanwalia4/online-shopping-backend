const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Shopping service!');
});

app.listen(8003, () => {
    console.log('Shopping service listening on port 8003!');
});