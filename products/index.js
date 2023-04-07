const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from products service!');
});

app.listen(8002, () => {
    console.log('Products service listening on port 8002!');
});