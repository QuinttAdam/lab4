const express = require('express')
const app = express()
const port = 3000

//enable CORS
const cors = require('cors');
app.use(cors());


app.get('/api/v1/messages', (req, res) => {
  
  // Get the username from the URL
  const username = req.query.user;
  
  if(username){
    res.json({
      "status": "success",
      "message": `GET message for username ${username}`,
    })
  }else{
    res.json({
      "status": "success",
      "message": "GET messages",
      "data": [
        {
          "user": "Bart",
          "message": "Hello World"
        },
        {
          "user": "Gert",
          "message": "Goodbye World"
        }
      ],
    })
  }
})
app.get('/api/v1/messages/:id', (req, res) => {
  // Get the ID from the URL
  const id = req.params.id;  

  res.json({
    
    "status": "success",
    "message": `GET message ${id}`,
    "data": [
      {
        "user": "Gert",
        "message": "Goodbye World"
      }
    ],
  })
})
app.put('/api/v1/messages/:id', (req, res) => {
  // Get the ID from the URL
  const id = req.params.id;  

  res.json({
    
    "status": "success",
    "message": `UPDATE message with id ${id}`,
    
  })
})
app.delete('/api/v1/messages/:id', (req, res) => {
  // Get the ID from the URL
  const id = req.params.id;  

  res.json({
    
    "status": "success",
    "message": `DELETING message with id ${id}`,
    
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})