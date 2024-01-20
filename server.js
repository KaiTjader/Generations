const express = require("express");

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/db'));

const dynamicRouter = require('./routes.js');
app.use(dynamicRouter);

const PORT = 8080;
app.listen(PORT, () =>{
    console.log("Server is listening on: " + PORT);
});