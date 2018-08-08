// requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

// globals
const port = process.env.PORT || 5000;

// server
app.listen(port, () => {
    console.log('server up on: ', port);
})