const express = require("express");
const app = express();

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 8080, () => {
    console.log('Server listening on http://localhost:8080');
});
