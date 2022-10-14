'use strict';

const express = require('express');

// Constants
const PORT = 3478;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Coucou');
});

app.listen(PORT, HOST, () => {
  console.log(`Se lance sur http://${HOST}:${PORT}`);
});