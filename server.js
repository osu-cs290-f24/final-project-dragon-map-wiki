const express = require('express');
const path = require('path');
var exphbs = require('express-handlebars')

var dragonData = require("./postData.json")

const app = express();
const PORT = 3000;

app.engine("handlebars", exphbs.engine({
  defaultLayout: null
}))

app.set("view engine", "handlebars")
app.use(express.static('static'))

const transformedData = dragonData.map(item => ({
  dragonName: item.name,
  photo_url: item.image,
  dragon_description: item.description
}))

app.use(express.static(path.join(__dirname, 'DragonMapWiki')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'DragonMapWiki', 'index.html'));
});


// Navigate to dragon wiki. use render
app.get('/DragonWiki', (req, res) => {

  res.status(200).render("wikipage", {
    posts: transformedData,
  })

});



app.get('/DragonMap', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'DragonMapWiki', 'DragonMap.html'));
});

app.get('*', function (req, res) {
    res.status(404).render("404", {

    })
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});