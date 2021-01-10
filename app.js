const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(ejsLayouts);
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public/'))

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(PORT, () => console.log(`🦻listenin' on port ${PORT}🦻`));