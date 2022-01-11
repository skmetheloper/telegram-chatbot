const { database } = require('../lib/firebase');
const { verify, handle} = require('../lib/telegram');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  const { token } = req.query;
  const { message } = req.body;

  if (!verify(token)) {
    return res.status(401).send("Unauthorized");
  }

  if (typeof message !== 'object') {
    return res.status(400).send("Bad Request");
  }

  switch(message.chat.type) {
    case 'private':
      handle.message(message);
      break;
    }
  }
  
  res.send('OK');
});

module.exports = app;
