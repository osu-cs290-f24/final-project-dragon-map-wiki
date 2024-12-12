const express = require('express');
const path = require('path');
var exphbs = require('express-handlebars')
var fs = require("fs")

var dragonData = require("./postData.json")

const app = express();
const PORT = 3000;

app.engine("handlebars", exphbs.engine({
  defaultLayout: 'main'
}))

app.set("view engine", "handlebars")
app.use(express.static('static'))
app.use(express.json())

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

app.post('/DragonWiki/addDragon', function (req, res, next) {
  console.log("  -- req.body:", req.body)
  if (req.body && req.body.name && req.body.image && req.body.description) {
    //checking
      dragonData.push({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description
      })
      fs.writeFile(
        __dirname + "/postData.json",
        JSON.stringify(dragonData, null, 2),

        function (err, result) {
          if (!err) {
            res.status(200).send("added to backend")
          } else {
            res.status(500).send("Server error.  Try again soon.")
          }
        }
      )
    
  } else {
    res.status(400).send("Request body must contain name, img url and description.")
  }
})



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