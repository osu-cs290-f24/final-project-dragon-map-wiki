const express = require('express');
const path = require('path');
const { create } = require('express-handlebars'); 

const app = express();
const PORT = 3000;

// Handlebars
const hbs = create({
  extname: '.handlebars', 
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'HandleBarsTemp/layouts'),
});

app.engine('handlebars', hbs.engine); 
app.set('view engine', 'handlebars'); 
app.set('views', path.join(__dirname, 'HandleBarsTemp')); 

// Static dir
app.use(express.static(path.join(__dirname, 'DragonMapWiki')));

// Main 
app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to Dragon Wiki' });
});

// Dragon Map Wiki
app.get('/test', (req, res) => {
  res.render('test', { title: 'Dragon Map Wiki' });
});

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: '404 - Page Not Found' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
