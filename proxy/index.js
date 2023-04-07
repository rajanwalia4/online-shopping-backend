const express = require("express");
const app = express();
const proxy = require("express-http-proxy");
app.use("/customer", proxy("http://127.0.0.1:8001"));
app.use("/shopping", proxy("http://127.0.0.1:8003"));
app.use("/", proxy("http://127.0.0.1:8002"));

app.listen(8000, () => {
    console.log("API Gateway is listening on port 8000!");
});