const express = require('express')
const app = express()
app.use(express.json());
app.all('/', (req, res) => {
    const requestBody = req.body;
    console.log("requestBody",requestBody);
  res.send(requestBody);
})
app.listen(process.env.PORT || 3000)
