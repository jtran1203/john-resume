const express = require('express');
const app = express(); // start an express app
const path = require('path'); //relative windows or MAC

//Static Files could be (HTML, Javascript, CSS, ETC)
app.use(express.static('public'));


app.get('/',(request, response)=>{
  //send a response
  response.sendFile(path.join(__dirname, '/index.html'));
});


app.get('/javascript',(req, res)=>{
  res.sendFile(path.join(__dirname, '/script.js'));
});

app.get('/css',(req, res)=>{
  res.sendFile(path.join(__dirname, '/main.css'));
});

app.get('/fontawesome',(req, res)=>{
  res.sendFile(path.join(__dirname, '/fontawesome-all.js'));
});

app.get('*', (req, res)=>{
  res.json('Page not found');
});




app.listen(8000, ()=>{
  console.log("App is starting on port", 8000);
})
