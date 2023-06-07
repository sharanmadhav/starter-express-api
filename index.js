const express = require('express')
const app = express()
app.all('/', (req, res) => {
    const requestBody = req.body;
  res.send(requestBody);
})
app.listen(process.env.PORT || 3000)
