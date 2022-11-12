'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

app.use(morgan('dev'));
app.use(express.static('.'));

const port = process.env.PORT || 3000;

const RESUME_INFO = {
	name: 'Daniel Usov',
};

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '.', 'index.html'));
});

app.get('/info', (req, res) => {
	res.json(RESUME_INFO);
});

app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});
