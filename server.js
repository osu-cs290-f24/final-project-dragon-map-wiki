const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'DragonMapWiki')));

app.get('/', (req, res) => {
  res.status(200).render('index', { title: 'Dragon Map Wiki', dragons: dragons });
});


// Navigate to dragon wiki. use render
app.get('/DragonWiki', (req, res) => {

  // Add /Dragonmap wiki path in index.html
  // Homepage remian the one with photos and no description
  // wikipage.css is in /static
  // 404 need to turn into handlebar(just copy and paste)
  // main.handlebars I think since we only have one file so don't need
  // postdata.json just copy and paste the other dragon description

});



app.get('/DragonMap', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'DragonMapWiki', 'DragonMap.html'));
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404 - Page Not Found', is404: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
