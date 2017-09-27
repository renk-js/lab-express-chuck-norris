const express = require('express');
const app = express();
const Chuck  = require('chucknorris-io');
const client = new Chuck();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  // send views/index.ejs for displaying in the browser
  res.render('index');
});

app.get('/random', (req, res, next) => {
  //// Retrieve a random chuck joke
client.getRandomJoke()
  .then((response) => {
  //console.log(response)
    res.render('random', {joke : response} );  
})
  .catch((err) => {
    // handle error
  }); 
  
});

app.get('/categories', (req, res, next) => {
  //// Retrieve a random chuck joke
client.getJokeCategories()
  .then((response) => {
  //console.log(response)
    res.render('categories', {categories : response} );  
})
  .catch((err) => {
    // handle error
  }); 
  
});

app.listen(3000, () => {
  console.log("Up and running");
});