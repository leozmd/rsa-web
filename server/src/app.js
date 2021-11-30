const express = require("express");
const cors = require("cors");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));

app.use(require("./routes"));

http.createServer(app)
    .listen(3000, function() {
        console.log('Ejecutando en puerto 3000')
    });