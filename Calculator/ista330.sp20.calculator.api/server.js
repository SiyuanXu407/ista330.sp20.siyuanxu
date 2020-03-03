// dependencies
const express = require('express');
const url = require('url'); //a comment
const cors = require('cors');
const calculator = require('./calculator.js');

// create the server
const app = express();
app.use(cors());
const port = 3001;

// the methods

app.get('/', (request, response) => {
    var urlParts = url.parse(request.url , true);
    console.log(urlParts);
    var parameters = urlParts.query;
    var expression = parameters.expression;
    console.log(expression);
    response.send(expression + " =  " +
                  calculator.calculate(expression) );
});


// start the server
app.listen(port, () => console.log('Listening on port  ' + port));
