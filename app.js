const express = require('express') // loads the express package
const { engine } = require('express-handlebars'); // loads handlebars for Express
const port = 8080 // defines the port
const app = express() // creates the Express application
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('project.db')
const session = require('express-session')
const Handlebars = require('handlebars');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


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
    {"id":"2", "name": "The Florist", "url": "/img/2.png"},
    {"id":"3", "name": "The Librarian",  "url": "/img/3.png"},
    {"id":"4", "name": "The Curator",  "url": "/img/4.png"},
    {"id":"5", "name": "How it Started",  "url": "/img/5.png"},
    {"id":"6", "name": "Spit Shine",  "url": "/img/6.png"},
    {"id":"7", "name": "Spartan Ways",  "url": "/img/7.png"},
    {"id":"8", "name": "Full Belly",  "url": "/img/8.png"},
    {"id":"9", "name": "Knock off the Rust",  "url": "/img/9.png"},
    {"id":"10", "name": "A Grizzly Encounter",  "url": "/img/10.png"},
    {"id":"11", "name": "Blood Debt",  "url": "/img/11.png"},
    {"id":"12", "name": "Backyard Brawl",  "url": "/img/12.png"},
    {"id":"13", "name": "Root of the Problem",  "url": "/img/13.png"},
    {"id":"14", "name": "The Cauldron",  "url": "/img/14.png"},
    {"id":"15", "name": "Off the Leash",  "url": "/img/15.png"},
    {"id":"16", "name": "Comeuppance",  "url": "/img/16.png"},
    {"id":"17", "name": "Better Together",  "url": "/img/17.png"},
    {"id":"18", "name": "Phalanx",  "url": "/img/18.png"},
    {"id":"19", "name": "Collector",  "url": "/img/19.png"},
    {"id":"20", "name": "Dragon Slayer",  "url": "/img/20.png"},
    {"id":"21", "name": "How it's Going",  "url": "/img/21.png"},
    {"id":"22", "name": "Funeral for a Friend",  "url": "/img/22.png"},
    {"id":"23", "name": "Rebel Leader",  "url": "/img/23.png"},
    {"id":"24", "name": "New Friends",  "url": "/img/24.png"},
    {"id":"25", "name": "Full Gufa",  "url": "/img/25.png"},
    {"id":"26", "name": "Making Amends",  "url": "/img/26.png"},
    {"id":"27", "name": "It Was a Good Day",  "url": "/img/27.png"},
    {"id":"28", "name": "Invasive Species",  "url": "/img/28.png"},
    {"id":"29", "name": "Besties",  "url": "/img/29.png"},
    {"id":"30", "name": "Rightful Place",  "url": "/img/30.png"},
    {"id":"31", "name": "Pure of Hart",  "url": "/img/31.png"},
    {"id":"32", "name": "Trials by Fire",  "url": "/img/32.png"},
    {"id":"33", "name": "Ready for Commitment",  "url": "/img/33.png"},
    {"id":"34", "name": "Ragnarök",  "url": "/img/34.png"},
    {"id":"35", "name": "Grave Mistake",  "url": "/img/35.png"},
    {"id":"36", "name": "The True Queen",  "url": "/img/36.png"},
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

db.run("CREATE TABLE userInfo (uid INTEGER PRIMARY KEY AUTOINCREMENT, uname TEXT, uhash TEXT, uimgURL TEXT, uEmail TEXT)", (error) => {
  if (error) {
    console.log("ERROR: ", error)
  } else {
    console.log("---> Table projects created!")
  }
})

// db.run("CREATE TABLE GT7Achivement (aid INTEGER PRIMARY KEY, aname TEXT NOT NULL, aimgURL TEXT)", (error) => {
//   if (error) {
//     console.log("ERROR: ", error)
//   } else {
//     console.log("---> Table projects created!")
//   }
//   const achivements=[ 
//     {"id":"1", "name": "Gran Turismo Platinum Trophy", "url": "/img/1.png"},
//     {"id":"2", "name": "Hard Work Pays Off", "url": "/img/2.png"},
//     {"id":"3", "name": "Circuit Master",  "url": "/img/3.png"},
//     {"id":"4", "name": "Driving the Autobahn Together",  "url": "/img/4.png"},
//     {"id":"5", "name": "Speed Archdemon",  "url": "/img/5.png"},
//   ]


//   achivements.forEach( (oneAchivement) => {
//     db.run("INSERT INTO GT7Achivement (aid, aname, aimgURL) VALUES (?, ?, ?)", [oneAchivement.id, oneAchivement.name,oneAchivement.url], (error) => {
//       if (error) {
//       console.log("ERROR: ", error)
//       } else {
//       console.log("Line added into the projects table!")
//       }
//     })
//   })  
// })


// defines handlebars engine
app.engine('handlebars', engine());
// defines the view engine to be handlebars
app.set('view engine', 'handlebars');
// defines the views directory
app.set('views', './views');

// define static directory "public" to access css/ and img/
app.use(express.static('public'))
// defines the final default route 404 NOT FOUND

// register helper 
Handlebars.registerHelper('lessThanEqual', (value1, value2, options)=>{
  if (value1 <= value2) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
Handlebars.registerHelper('inRange', (value1, value2, value3, options)=> {
  if (value1 > value2 && value1 <= value3) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

// middleware for read form body
app.use(express.urlencoded({ extended: false }));


app.use(session({
  secret: "8964",
  resave: false,
  saveUninitialized: true 
}))

app.post('/api/register', async (req, res) => {
    // const { username, password } = req.body;
    const username = req.body.username;
    const password = req.body.password;
    if(password==null||username==null){
      res.status(400).send({ error: 'Username already exists' });
      res.render('register.handlebars');
    }else{
      db.get('SELECT * FROM userInfo WHERE uname = ?', [username], (err, row) => {
        if (err) {
            res.status(500).send({ error: 'Server error' });
        } else if (row) {
            res.status(400).send({ error: 'Username already exists' });
        } else {
            const hash = bcrypt.hashSync(password, 10);
            db.run('INSERT INTO userInfo (uname, uhash) VALUES (?, ?)', [username, hash], (err) => {
                if (err) {
                    res.status(500).send({ error: 'Server error' });
                } else {
                    res.render('home.handlebars');
                }
            });
        }
      });
    }
});



app.post('/api/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if(password==null||username==null){
    res.status(400).send({ error: 'Username already exists' });
    res.render('register.handlebars');
  }else{
    db.get('SELECT * FROM userInfo WHERE uname = ?', [username], (err, row) => {
      if (err) {
        res.status(500).send({ error: 'Server error' });
      } else if (!row) {
        res.status(401).send({ error: 'User not found' });
      } else {
        const result = bcrypt.compareSync(password, row.uhash);
        if (result) {
          // req.session.user = user;
          res.render('home.handlebars')
        } else {
          res.status(401).send({ error: 'Wrong password' });
        }
      }
    });
  }
});


// app.get('/humans/:id', function(request, response){
//   const id = request.params.id 
//   const model = humans[id]
//   response.render('human.handlebars', model)
// })



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
app.get('/myPage',function(request, response){
  if(false){
  response.render('myPage.handlebars')
  }else{
  response.render('register.handlebars')
  }
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




app.get('/mainpage/1/1', function(request, response){
  db.all("SELECT * FROM godOfWarAchivement", function(error,Array){
    if(error){
      const model={
        hasDatabaseError: true,
        theError: error,
        godOfWarAchivement: []
      }
      response.render('godOfWar1.handlebars', model)
    }else{
      const model={
        hasDatabaseError: false,
        theError: "",
        godOfWarAchivement: Array
      }
      response.render('godOfWar1.handlebars', model)
    }
  })
})
app.get('/mainpage/1/2', function(request, response){
  db.all("SELECT * FROM godOfWarAchivement", function(error,Array){
    if(error){
      const model={
        hasDatabaseError: true,
        theError: error,
        godOfWarAchivement: []
      }
      response.render('godOfWar2.handlebars', model)
    }else{
      const model={
        hasDatabaseError: false,
        theError: "",
        godOfWarAchivement: Array
      }
      response.render('godOfWar2.handlebars', model)
    }
  })
})
app.get('/mainpage/1/3', function(request, response){
  db.all("SELECT * FROM godOfWarAchivement", function(error,Array){
    if(error){
      const model={
        hasDatabaseError: true,
        theError: error,
        godOfWarAchivement: []
      }
      response.render('godOfWar3.handlebars', model)
    }else{
      const model={
        hasDatabaseError: false,
        theError: "",
        godOfWarAchivement: Array
      }
      response.render('godOfWar3.handlebars', model)
    }
  })
})



// app.get('/mainpage/2', function(request, response){
//   db.all("SELECT * FROM GT7Achivement", function(error,Array){
//     if(error){
//       const model={
//         hasDatabaseError: true,
//         theError: error,
//         GT7Achivement: []
//       }
//       response.render('gt7.handlebars', model)
//     }else{
//       const model={
//         hasDatabaseError: false,
//         theError: "",
//         GT7Achivement: Array
//       }
//       response.render('gt7.handlebars', model)
//     }
//   })
// })




app.use(function(req,res){
  res.status(404).render('404.handlebars');
});


// runs the app and listens to the port
app.listen(port, () => {
    console.log(`Server running and listening on port ${port}...`)
})

