const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send("Basic Express API Root Endpoint")
})

app.listen(5000, () => {
  console.log("App is running on port 5000");
})