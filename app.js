const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send({
    message: 'Hello v2'
  });
})

app.listen(4000);