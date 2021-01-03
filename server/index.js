const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');
app.use('/api/posts',posts);

// start server
const port =  4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
//version 7