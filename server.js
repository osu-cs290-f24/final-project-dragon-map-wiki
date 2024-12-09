const express = require('express');
const path = require('path');
var exphbs = require('express-handlebars')

const app = express();
const PORT = 2000;

app.engine("handlebars", exphbs.engine({
  defaultLayout: null
}))

app.set("view engine", "handlebars")
app.use(express.static('static'))

app.use(express.static(path.join(__dirname, 'DragonMapWiki')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'DragonMapWiki', 'index.html'));
});


// Navigate to dragon wiki. use render
app.get('/DragonWiki', (req, res) => {

  // Add /Dragonmap wiki path in index.html ----> Path for Dragonmap.html is in index.js. You can chnage this path to wiki whne it's done.   
  // Homepage remian the one with photos and no description ----> leave names and photos
  // wikipage.css is in /static
  // 404 need to turn into handlebar(just copy and paste) ----> Done
  // main.handlebars I think since we only have one file so don't need
  // postdata.json just copy and paste the other dragon description -----> This is in DragonsData

});



app.get('/DragonMap', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'DragonMapWiki', 'DragonMap.html'));
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404 - Page Not Found', layout: false });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});