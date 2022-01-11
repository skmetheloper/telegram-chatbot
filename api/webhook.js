const { database } = require('../lib/firebase');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {

});

app.post('/', (req, res) => {

});

module.exports = app;
