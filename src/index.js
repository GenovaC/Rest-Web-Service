const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');

const app = express();

require('./db')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* app.get('/', (req, res) => {
    res.send('Hola mundo');
}) */

app.use('/api', apiRouter);

app.listen(8080, () => {
    console.log('Server on port 8080');
})