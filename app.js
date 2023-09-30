const express = require('express') // loads the express package
const { engine } = require('express-handlebars'); // loads handlebars for Express
const port = 8080 // defines the port
const app = express() // creates the Express application



// MODEL (DATA)
// const humans = [
//     {"id": "0", "name": "Jerome"}, 
//     {"id": "1", "name": "Mira"},
//     {"id": "2", "name": "Linus"}, 
//     {"id": "3", "name": "Susanne"}, 
//     {"id": "4", "name": "Jasmin"}, 
// ]
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('project.db')


db.run("CREATE TABLE popularGames (gid INTEGER PRIMARY KEY, gname TEXT NOT NULL, gimgURL TEXT, P INTEGER NOT NULL, G INTEGER NOT NULL, S INTEGER NOT NULL, C INTEGER NOT NULL)", (error) => {
  if (error) {
    console.log("ERROR: ", error)
  } else {
    console.log("---> Table projects created!")
  }
  const games=[ 
    {"id":"1", "name": "God of War Rägnarok", "url": "/img/1.png","P": "1","G":"3","S":"4","C":"1"},
    {"id":"2", "name": "GT7", "url": "/img/2.png","P": "1","G":"3","S":"4","C":"1"},
    {"id":"3", "name": "Call of Duty",  "url": "/img/3.png","P":"1","G":"3","S":"4","C":"1"},
    {"id":"4", "name": "Resident Evil 4",  "url": "/img/4.png","P":"1","G":"3","S":"4","C":"1"},
    {"id":"5", "name": "The last of Us",  "url": "/img/5.png","P":"1","G":"3","S":"4","C":"1"},
    {"id":"6", "name": "Death Stranding",  "url": "/img/6.png","P":"1","G":"3","S":"4","C":"1"},
  ]


  games.forEach( (oneGame) => {
    db.run("INSERT INTO popularGames (gid, gname, gimgURL, P, G, S, C) VALUES (?, ?, ?, ?, ?, ?, ?)", [oneGame.id, oneGame.name,oneGame.url,oneGame.P,oneGame.G,oneGame.S,oneGame.C], (error) => {
      if (error) {
      console.log("ERROR: ", error)
      } else {
      console.log("Line added into the projects table!")
      }
    })
  })  
})

db.run("CREATE TABLE godOfWarAchivement (aid INTEGER PRIMARY KEY, aname TEXT NOT NULL, aimgURL TEXT)", (error) => {
  if (error) {
    console.log("ERROR: ", error)
  } else {
    console.log("---> Table projects created!")
  }
  const achivements=[ 
    {"id":"1", "name": "The Bear and the Wolf", "url": "/img/1.png"},
    {"id":"2", "name": "The Librarian", "url": "/img/2.png"},
    {"id":"3", "name": "The Curator",  "url": "/img/3.png"},
    {"id":"4", "name": "How it Started",  "url": "/img/4.png"},
    {"id":"5", "name": "Spit Shine",  "url": "/img/5.png"},
  ]


  achivements.forEach( (oneAchivement) => {
    db.run("INSERT INTO godOfWarAchivement (aid, aname, aimgURL) VALUES (?, ?, ?)", [oneAchivement.id, oneAchivement.name,oneAchivement.url], (error) => {
      if (error) {
      console.log("ERROR: ", error)
      } else {
      console.log("Line added into the projects table!")
      }
    })
  })  
})

db.run("CREATE TABLE GT7Achivement (aid INTEGER PRIMARY KEY, aname TEXT NOT NULL, aimgURL TEXT)", (error) => {
  if (error) {
    console.log("ERROR: ", error)
  } else {
    console.log("---> Table projects created!")
  }
  const achivements=[ 
    {"id":"1", "name": "Gran Turismo Platinum Trophy", "url": "/img/1.png"},
    {"id":"2", "name": "Hard Work Pays Off", "url": "/img/2.png"},
    {"id":"3", "name": "Circuit Master",  "url": "/img/3.png"},
    {"id":"4", "name": "Driving the Autobahn Together",  "url": "/img/4.png"},
    {"id":"5", "name": "Speed Archdemon",  "url": "/img/5.png"},
  ]


  achivements.forEach( (oneAchivement) => {
    db.run("INSERT INTO GT7Achivement (aid, aname, aimgURL) VALUES (?, ?, ?)", [oneAchivement.id, oneAchivement.name,oneAchivement.url], (error) => {
      if (error) {
      console.log("ERROR: ", error)
      } else {
      console.log("Line added into the projects table!")
      }
    })
  })  
})


// defines handlebars engine
app.engine('handlebars', engine());
// defines the view engine to be handlebars
app.set('view engine', 'handlebars');
// defines the views directory
app.set('views', './views');

// define static directory "public" to access css/ and img/
app.use(express.static('public'))


app.get('/humans/:id', function(request, response){
  const id = request.params.id 
  const model = humans[id]
  response.render('human.handlebars', model)
})



// static pages
app.get('/', function(request, response){
  response.render('home.handlebars')
})
app.get('/about', function(request, response){
  response.render('about.handlebars')
})
app.get('/contect', function(request, response){
  response.render('contect.handlebars')
})




app.get('/mainpage', function(request, response){
  db.all("SELECT * FROM popularGames", function(error,gameArray){
    if(error){
      const model={
        hasDatabaseError: true,
        theError: error,
        popularGames: []
      }
      response.render('mainpage.handlebars', model)
    }else{
      const model={
        hasDatabaseError: false,
        theError: "",
        popularGames: gameArray
      }
      response.render('mainpage.handlebars', model)
    }
  })
})

app.get('/mainpage/1', function(request, response){
  db.all("SELECT * FROM godOfWarAchivement", function(error,Array){
    if(error){
      const model={
        hasDatabaseError: true,
        theError: error,
        godOfWarAchivement: []
      }
      response.render('godOfWar.handlebars', model)
    }else{
      const model={
        hasDatabaseError: false,
        theError: "",
        godOfWarAchivement: Array
      }
      response.render('godOfWar.handlebars', model)
    }
  })
})

app.get('/mainpage/2', function(request, response){
  db.all("SELECT * FROM GT7Achivement", function(error,Array){
    if(error){
      const model={
        hasDatabaseError: true,
        theError: error,
        GT7Achivement: []
      }
      response.render('gt7.handlebars', model)
    }else{
      const model={
        hasDatabaseError: false,
        theError: "",
        GT7Achivement: Array
      }
      response.render('gt7.handlebars', model)
    }
  })
})



// defines the final default route 404 NOT FOUND
app.use(function(req,res){
  res.status(404).render('404.handlebars');
});

// runs the app and listens to the port
app.listen(port, () => {
    console.log(`Server running and listening on port ${port}...`)
})

