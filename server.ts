const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const testController = require('./src/controllers/testController.ts');

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/test', testController);


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});



app.listen(process.env.PORT || 8080, () => {
    console.log('Server listening on http://localhost:8080');
});
