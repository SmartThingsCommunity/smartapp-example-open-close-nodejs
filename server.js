const express = require('express');
const smartApp = require('./smartapp');


const server = module.exports = express();
const PORT = process.env.PORT || 3001;

/* Configure Express to handle JSON lifecycle event calls from SmartThings */
server.use(express.json());
server.post('/', function (req, res, next) {
    smartApp.handleHttpCallback(req, res);
});

/* Start listening at your defined PORT */
server.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
