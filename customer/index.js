const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from customer service!');
});

app.listen(8001, () => {
    console.log('Customer service listening on port 8001!');
});