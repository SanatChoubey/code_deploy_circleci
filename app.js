const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send({
    message: `Hello v6, ${process.env.NODE_ENV}`
  });
})

app.listen(4000);