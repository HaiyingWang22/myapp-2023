const express = require('express') // loads the express package
const { engine } = require('express-handlebars'); // loads handlebars for Express
const port = 8080 // defines the port
const app = express() // creates the Express application
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('project.db')
const Handlebars = require('handlebars');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const secret = 'qwertyuiopå'
const cookieParser = require('cookie-parser');


db.run("CREATE TABLE popularGames (gid INTEGER PRIMARY KEY, gname TEXT NOT NULL, gimgURL TEXT, P INTEGER NOT NULL, G INTEGER NOT NULL, S INTEGER NOT NULL, C INTEGER NOT NULL)", (error) => {
  if (error) {
    console.log("ERROR: ", error)
  } else {
    console.log("---> Table popularGames created!")
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
      console.log("Line added into the popularGames table!")
      }
    })
  })  
})

db.run("CREATE TABLE godOfWarAchivement (aid INTEGER PRIMARY KEY, aname TEXT NOT NULL, aimgURL TEXT, gid INTEGER, FOREIGN KEY (gid) REFERENCES popularGames (gid) )", (error) => {
  if (error) {
    console.log("ERROR: ", error)
  } else {
    console.log("---> Table godOfWarAchivement created!")
  }
  const achivements=[ 
    {"id":"1", "name": "The Bear and the Wolf", "url": "/img/1.png", "gid":"1"},
    {"id":"2", "name": "The Florist", "url": "/img/2.png", "gid":"1"},
    {"id":"3", "name": "The Librarian",  "url": "/img/3.png", "gid":"1"},
    {"id":"4", "name": "The Curator",  "url": "/img/4.png", "gid":"1"},
    {"id":"5", "name": "How it Started",  "url": "/img/5.png", "gid":"1"},
    {"id":"6", "name": "Spit Shine",  "url": "/img/6.png", "gid":"1"},
    {"id":"7", "name": "Spartan Ways",  "url": "/img/7.png", "gid":"1"},
    {"id":"8", "name": "Full Belly",  "url": "/img/8.png", "gid":"1"},
    {"id":"9", "name": "Knock off the Rust",  "url": "/img/9.png", "gid":"1"},
    {"id":"10", "name": "A Grizzly Encounter",  "url": "/img/10.png", "gid":"1"},
    {"id":"11", "name": "Blood Debt",  "url": "/img/11.png", "gid":"1"},
    {"id":"12", "name": "Backyard Brawl",  "url": "/img/12.png", "gid":"1"},
    {"id":"13", "name": "Root of the Problem",  "url": "/img/13.png", "gid":"1"},
    {"id":"14", "name": "The Cauldron",  "url": "/img/14.png", "gid":"1"},
    {"id":"15", "name": "Off the Leash",  "url": "/img/15.png", "gid":"1"},
    {"id":"16", "name": "Comeuppance",  "url": "/img/16.png", "gid":"1"},
    {"id":"17", "name": "Better Together",  "url": "/img/17.png", "gid":"1"},
    {"id":"18", "name": "Phalanx",  "url": "/img/18.png", "gid":"1"},
    {"id":"19", "name": "Collector",  "url": "/img/19.png", "gid":"1"},
    {"id":"20", "name": "Dragon Slayer",  "url": "/img/20.png", "gid":"1"},
    {"id":"21", "name": "How it's Going",  "url": "/img/21.png"},
    {"id":"22", "name": "Funeral for a Friend",  "url": "/img/22.png", "gid":"1"},
    {"id":"23", "name": "Rebel Leader",  "url": "/img/23.png", "gid":"1"},
    {"id":"24", "name": "New Friends",  "url": "/img/24.png", "gid":"1"},
    {"id":"25", "name": "Full Gufa",  "url": "/img/25.png", "gid":"1"},
    {"id":"26", "name": "Making Amends",  "url": "/img/26.png", "gid":"1"},
    {"id":"27", "name": "It Was a Good Day",  "url": "/img/27.png", "gid":"1"},
    {"id":"28", "name": "Invasive Species",  "url": "/img/28.png", "gid":"1"},
    {"id":"29", "name": "Besties",  "url": "/img/29.png", "gid":"1"},
    {"id":"30", "name": "Rightful Place",  "url": "/img/30.png", "gid":"1"},
    {"id":"31", "name": "Pure of Hart",  "url": "/img/31.png", "gid":"1"},
    {"id":"32", "name": "Trials by Fire",  "url": "/img/32.png", "gid":"1"},
    {"id":"33", "name": "Ready for Commitment",  "url": "/img/33.png", "gid":"1"},
    {"id":"34", "name": "Ragnarök",  "url": "/img/34.png", "gid":"1"},
    {"id":"35", "name": "Grave Mistake",  "url": "/img/35.png", "gid":"1"},
    {"id":"36", "name": "The True Queen",  "url": "/img/36.png", "gid":"1"},
  ]


  achivements.forEach( (oneAchivement) => {
    db.run("INSERT INTO godOfWarAchivement (aid, aname, aimgURL, gid) VALUES (?, ?, ?, ?)", [oneAchivement.id, oneAchivement.name,oneAchivement.url,oneAchivement.gid], (error) => {
      if (error) {
      console.log("ERROR: ", error)
      } else {
      console.log("Line added into the godOfWarAchivement table!")
      }
    })
  })  
})

db.run("CREATE TABLE userInfo (uid INTEGER PRIMARY KEY AUTOINCREMENT, uname TEXT, uhash TEXT, uimgURL TEXT, uEmail TEXT)", (error) => {
  if (error) {
    console.log("ERROR: ", error)
  } else {
    console.log("---> Table userInfo created!")
  }
})

db.run("CREATE TABLE bookmarks (bid INTEGER PRIMARY KEY AUTOINCREMENT, status TEXT , uid INTEGER, uname TEXT, gid INTEGER, gname TEXT, gimgURL TEXT, FOREIGN KEY (uid) REFERENCES userInfo (uid), FOREIGN KEY (uname) REFERENCES userInfo (uname), FOREIGN KEY (gid) REFERENCES popularGames (gid), FOREIGN KEY (gname) REFERENCES popularGames (gname), FOREIGN KEY (gimgURL) REFERENCES popularGames (gimgURL))", (error) => {
  if (error) {
    console.log("ERROR: ", error)
  } else {
    console.log("---> Table bookmarks created!")
  }
})

db.run("CREATE TABLE comments (cid INTEGER PRIMARY KEY AUTOINCREMENT, comment TEXT, uid INTEGER, uname TEXT, aid INTEGER, gid INTEGER, FOREIGN KEY (uid) REFERENCES userInfo (uid),FOREIGN KEY (uname) REFERENCES userInfo (uname), FOREIGN KEY (aid) REFERENCES userInfo (aid), FOREIGN KEY (gid) REFERENCES userInfo (gid))", (error) => {
  if (error) {
    console.log("ERROR: ", error)
  } else {
    console.log("---> Table comments created!")
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
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use(express.static('public'))
// middleware for read form body
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


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
Handlebars.registerHelper('Equal', (value1, value2, options)=>{
  if (value1 === value2) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
Handlebars.registerHelper('unEqual', (value1, value2, options)=>{
  if (value1 !== value2) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});



// function for relode page
function reloadAdminpage(res,message){
  const model = {
    hasDatabaseError: false,
    theError: "",
    comments: [],
    message: "",
    name:"Admin"
  };
  model.message = message;
  db.all("SELECT * FROM comments", function(error,Array){
    if(Array){
      if(error){
        model.hasDatabaseError = true;
        model.theError = error;
      } else {
        model.comments= Array;
        res.render('myPage.handlebars', model)
      }
    }
  })
}
function reloadUserpage(res,uname,message){
  const model = {
    hasDatabaseError: false,
    theError: "",
    comments: [],
    message: "",
    name:""
  };
  model.name = uname;
  model.message = message;
  db.all('SELECT * FROM comments WHERE uname = ? ', [uname], function(error, Array){
    if(Array){
      if(error){
        model.hasDatabaseError = true;
        model.theError = error;
      } else {
        model.comments= Array;
        res.render('myPage.handlebars', model)
      }
    }
  })
}
function reloadMainpage(res,uname,message){
  const model = {
    hasDatabaseError: false,
    theError: "",
    bookmarks: [],
    popularGames: [],
    message: ""
  };
  model.message = message;
  db.all('SELECT * FROM bookmarks WHERE uname = ? ', [uname], function(error, bookmarklist){
    if(bookmarklist){
      if(error){
        model.hasDatabaseError = true;
        model.theError = error;
      } else {
        model.bookmarks = bookmarklist;
      }
    }
    db.all("SELECT * FROM popularGames", function(error, gameArray){
      if(error){
        model.hasDatabaseError = true;
        model.theError = error;
      } else {
        model.popularGames = gameArray;
        // console.log(model)
        res.render('mainpage.handlebars', model);
      }
    });
  });
}
function reloadAchivement1(res,gid,message){
  const model = {
    hasDatabaseError: false,
    theError: "",
    // comments: [],
    // godOfWarAchivement: [],
    mergedData:[],
    message: ""
  };
  model.message = message;
  db.all("SELECT * FROM godOfWarAchivement", function(error,Array){
    if(Array){
      if(error){
        model.hasDatabaseError = true;
        model.theError = error;
      } else {
        model.godOfWarAchivement= Array;
      }
    }
    db.all('SELECT * FROM comments WHERE gid = ? ', [gid], function(error, comments){
      if(comments){
        if(error){
          model.hasDatabaseError = true;
          model.theError = error;
        } else {
          model.comments = comments;
          model.mergedData = {
            godOfWarAchivement: Array,
            comments: comments
          };
          console.log(model)
          res.render('godOfWar1.handlebars', model)
        }
      }
    });
  })
}
function reloadAchivement2(res,gid,message){
  const model = {
    hasDatabaseError: false,
    theError: "",
    // comments: [],
    // godOfWarAchivement: [],
    mergedData:[],
    message: ""
  };
  model.message = message;
  db.all("SELECT * FROM godOfWarAchivement", function(error,Array){
    if(Array){
      if(error){
        model.hasDatabaseError = true;
        model.theError = error;
      } else {
        model.godOfWarAchivement= Array;
      }
    }
    db.all('SELECT * FROM comments WHERE gid = ? ', [gid], function(error, comments){
      if(comments){
        if(error){
          model.hasDatabaseError = true;
          model.theError = error;
        } else {
          model.comments = comments;
          // model.godOfWarAchivement.comments = model.comments;
          // console.log(Array)
          // console.log(comments)
          model.mergedData = {
            godOfWarAchivement: Array,
            comments: comments
          };
          console.log(model)
          res.render('godOfWar2.handlebars', model)
        }
      }
    });
  })
}
function reloadAchivement3(res,gid,message){
  const model = {
    hasDatabaseError: false,
    theError: "",
    // comments: [],
    // godOfWarAchivement: [],
    mergedData:[],
    message: ""
  };
  model.message = message;
  db.all("SELECT * FROM godOfWarAchivement", function(error,Array){
    if(Array){
      if(error){
        model.hasDatabaseError = true;
        model.theError = error;
      } else {
        model.godOfWarAchivement= Array;
      }
    }
    db.all('SELECT * FROM comments WHERE gid = ? ', [gid], function(error, comments){
      if(comments){
        if(error){
          model.hasDatabaseError = true;
          model.theError = error;
        } else {
          model.comments = comments;
          // model.godOfWarAchivement.comments = model.comments;
          // console.log(Array)
          // console.log(comments)
          model.mergedData = {
            godOfWarAchivement: Array,
            comments: comments
          };
          console.log(model)
          res.render('godOfWar3.handlebars', model)
        }
      }
    });
  })
}




// static pages
app.get('/', (req, res) => {
  res.render('home.handlebars')
})
app.get('/about', (req, res) => {
  res.render('about.handlebars')
})
app.get('/contect', (req, res) => {
  response.render('contect.handlebars')
})




// User management system with CRUD operations()
app.get('/login', (req, res) => {
  const Token = req.cookies.token;
  if(Token){
    res.status(404).render('404.handlebars');
  }else{
    res.render('login.handlebars')
  }
})
app.get('/createAccount', (req, res) => {
  const Token = req.cookies.token;
  if(Token){
    res.status(404).render('404.handlebars');
  }else{
    res.render('register.handlebars')
  }  
})
app.post('/logout', (req, res) => {
  const Token = req.cookies.token;
  if(Token){
    res.clearCookie('token');
    res.render('login.handlebars')
  }else{
    res.status(404).render('404.handlebars');
  }   
});
app.post('/api/register', async (req, res) => {
  const Token = req.cookies.token;
  if(!Token){
    const username = req.body.username;
    const password = req.body.password;
    if(!password || !username){
      res.render('register.handlebars', { message : 'Username or password is missing'});
    }else{
      db.get('SELECT * FROM userInfo WHERE uname = ?', [username], (err, row) => {
        if (err) {
            res.status(500).send({ error: 'Server error' });
        } else if (row) {
            res.render('register.handlebars', { message :  'Username already exists'});
            // res.status(400);
        } else {
            const hash = bcrypt.hashSync(password, 10);
            db.run('INSERT INTO userInfo (uname, uhash) VALUES (?, ?)', [username, hash], (err) => {
                if (err) {
                    res.status(500).send({ error: 'Server error' });
                } else {
                    // res.render('login.handlebars');
                    res.render('login.handlebars', { message : 'Account created successfully !'});
                }
            });
        }
      });
    }
  }else{
    res.status(404).render('404.handlebars');
  }  
});
app.post('/api/login', async (req, res) => {
  const Token = req.cookies.token;
  if(!Token){
    const username = req.body.username;
    const password = req.body.password;
    if(!password || !username){
      res.render('login.handlebars', { message : 'Username or password is missing'});
    }else{
      db.get('SELECT * FROM userInfo WHERE uname = ?', [username], (err, row) => {
        if (err) {
          res.status(500).send({ error: 'Server error' });
        } else if (!row) {
          res.render('login.handlebars', { message : 'User not found'});
          // res.status(401).send({ error: 'User not found' });
        } else {
          const result = bcrypt.compareSync(password, row.uhash);
          if (result) {
            const name = row.uname
            var token = jwt.sign({
              id:String(name)
            },secret, {
              expiresIn: '1h' 
            })
            res.cookie('token', token, { maxAge: 3600000 }); 
            if(name === "Admin"){
              reloadAdminpage(res,'Login Successful!');
            }else{
              reloadUserpage(res,name,'Login Successful!')
            }
            // res.render('myPage.handlebars', {name})
          } else {
            res.render('login.handlebars', { message : 'Wrong password'});
          }
        }
      });
    }
  }else{
    res.status(404).render('404.handlebars');
  }
});
app.post('/api/update/:password', (req, res) => {
  const Token = req.cookies.token;
  if(Token){
    const decoded = jwt.verify(Token, secret);
    const uname = decoded.id;
    const newPassword = req.body.newPassword;
    const oldPassword = req.body.oldPassword;
    try {
      db.get('SELECT * FROM userInfo WHERE uname = ?', [uname], (err, row) => {
        if (err) {
          res.status(500).send({ error: 'Server error' });
        } else {
          const result = bcrypt.compareSync(oldPassword, row.uhash);
          if (result) {
            const hash = bcrypt.hashSync(newPassword, 10);
            db.run('UPDATE userInfo SET uhash = ? WHERE uname = ?', [hash, uname], function(error) {
              if (error) {
                res.status(500).send({ error: 'Failed to update data' });
              } else {
                if(uname === "Admin"){
                  reloadAdminpage(res,'Password has been updated');
                }else{
                  reloadUserpage(res,uname,'Password has been updated')
                }
              }
            });
          } else {
            res.render('myPage.handlebars', { message : 'Wrong old password'});
          }
        }
      });
    } catch (err) {
      res.status(401).send({error:'Invalid token'});
    }
  }else{
    res.status(404).render('404.handlebars');
  }
});
app.post('/api/delete/:account', (req, res) => {
  const Token = req.cookies.token;
  if(Token){
    const decoded = jwt.verify(Token, secret);
    const uname = decoded.id;
    if(uname === "Admin"){
      res.render('myPage.handlebars', { message : 'Administrator account cannot be deleted !'});
    }else{
      try {
        db.get('SELECT * FROM userInfo WHERE uname = ?', [uname], function(error, row) {
          if (error) {
            res.status(500).send({ error: 'Database error' });
          } else {
            if (row) {
              const userId = row.uid;
              db.run('DELETE FROM userInfo WHERE uid = ?', [userId], function(error) {
                if (error) {
                  res.status(500).send({ error: 'Delete operation failed' });
                } else {
                  res.clearCookie('token');
                  res.render('login.handlebars', { message : 'Account deleted successfully !'})
                }
              });
            } else {
              res.status(404).send({ error: 'User not found' });
            }
          }
        });
      } catch (err) {
        res.status(401).send({error:'Invalid token'});
      }
    }
  }else{
    res.status(404).render('404.handlebars');
  }  
});


// individual page
app.get('/myPage',function(req, res){
  const Token = req.cookies.token;
  if(Token){
    const decoded = jwt.verify(Token, secret);
    const uname = decoded.id;
    if(uname === "Admin"){
      reloadAdminpage(res,null);
    }else{
      reloadUserpage(res,uname,null)
    }
  }else{
  res.render('login.handlebars')
  }
})


// CRUD operations on bookmarks（start）

app.post('/api/mainpage/delete/:bookmark', (req, res) => {
  const Token = req.cookies.token;
  const gname = req.body.gname;
  const decoded = jwt.verify(Token, secret);
  const uname = decoded.id;

  if(Token){
    try {
      db.run('DELETE FROM bookmarks WHERE uname = ? AND gname = ?', [uname, gname], function(error) {
        if (error) {
          res.status(500).send({ error: 'Delete operation failed' });
        } else {
          reloadMainpage(res,uname,null);
        }
      });
    } catch (err) {
      res.status(401).send({error:'Invalid token'});
    }
  }
});
app.post('/api/mainpage/update/:bookmarkStatus', (req, res) => {
  const Token = req.cookies.token;
  const gname = req.body.gname;
  const status = req.body.status;
  const decoded = jwt.verify(Token, secret);
  const uname = decoded.id;

  if(Token){
    try {
      if(status==="playing"){
        db.run('UPDATE bookmarks SET status = ? WHERE gname = ?', ["played", gname], function(error) {
          if (error) {
            res.status(500).send({ error: 'Failed to update data' });
          } else {
            reloadMainpage(res,uname,null);
          }
        });
      }else{
        db.run('UPDATE bookmarks SET status = ? WHERE gname = ?', ["playing", gname], function(error) {
          if (error) {
            res.status(500).send({ error: 'Failed to update data' });
          } else {
            reloadMainpage(res,uname,null);
          }
        });
      }
    } catch (err) {
      res.status(401).send({error:'Invalid token'});
    }
  }
});
app.post('/api/mainpage/creat/:bookmark', (req, res) => {
  const Token = req.cookies.token;
  if(Token){
    const decoded = jwt.verify(Token, secret);
    const uname = decoded.id;
    const gname = req.body.gname;
    const gid = req.body.gid;
    const gimgURL = req.body.gimgURL;
    const status = "playing";
    try {
      db.get('SELECT * FROM bookmarks WHERE uname = ? AND gname = ?', [uname, gname], (err, row) => {
        if (err) {
            res.status(500).send({ error: 'Server error' });
        } else if (row) {
            reloadMainpage(res,uname, 'You have already added this game !');
        } else {
          db.run('INSERT INTO bookmarks (status, uname, gname, gid, gimgURL) VALUES (?, ?, ?, ?, ?)', [status, uname, gname, gid, gimgURL], function(err) {
            if (err) {
              res.status(500).send({ error: 'Failed to insert data' });
            } else {
              reloadMainpage(res,uname,null);
            }
          }); 
        }
      });
    } catch (err) {
      res.status(401).send({error:'Invalid token'});
    }
  }else{
    reloadMainpage(res,null, 'Need to log in to your account !');
    // res.render('mainpage.handlebars', { message : 'Need to log in to your account !'});
  }
});
app.get('/api/mainpage', (req, res) => {
  const Token = req.cookies.token;
  if(Token){
    try {
      const decoded = jwt.verify(Token, secret);
      const uname = decoded.id;
      reloadMainpage(res,uname,null);
    } catch (err) {
      res.status(401).send({error:'Invalid token'});
    }
  }else{
    db.all("SELECT * FROM popularGames", function(error,gameArray){
      if(error){
        const model={
          hasDatabaseError: true,
          theError: error,
          popularGames: []
        }
        res.render('mainpage.handlebars', model)
      }else{
        const model={
          hasDatabaseError: false,
          theError: "",
          popularGames: gameArray
        }
        res.render('mainpage.handlebars', model)
      }
    })
  }
})
// CRUD operations on bookmarks（end）


// CRUD operations on comments（start）
app.get('/mainpage/1/1',(req, res) => {
  try {
    reloadAchivement1(res,1,null)
  } catch (err) {
    res.status(401).send({error:'Invalid token'});
    
  }  
})
app.get('/mainpage/1/2', (req, res) => {
  try {
    reloadAchivement2(res,1,null)
  } catch (err) {
    res.status(401).send({error:'Invalid token'});
  } 
})
app.get('/mainpage/1/3', (req, res) => {
  try {
    reloadAchivement3(res,1,null)
  } catch (err) {
    res.status(401).send({error:'Invalid token'});
  } 
})
app.post('/api/creat/commentSubmit', (req, res) => {
  const Token = req.cookies.token;
  const gid = req.body.gid;
  const pageNumber = req.body.pageNumber;
  if(Token){
    const decoded = jwt.verify(Token, secret);
    const uname = decoded.id;
    const aid = req.body.aid;
    const comment = req.body.comment;
    if(!comment){
      if(pageNumber==="1"){
        reloadAchivement1(res,gid, 'Need to inpute something !');
      }else if(pageNumber==="2"){
        reloadAchivement2(res,gid, 'Need to inpute something !');
      }else if(pageNumber==="3"){
        reloadAchivement3(res,gid, 'Need to inpute something !');
      }
    }else{
      try {
        db.get('SELECT * FROM userInfo WHERE uname = ?', [uname], function(error, row) {
          if (error) {
            res.status(500).send({ error: 'Database error' });
          } else {
            if (row) {
              const userId = row.uid;
              // console.log(userId)
              db.run('INSERT INTO comments (comment, uid, uname, aid, gid) VALUES (?, ?, ?, ?, ?)', [comment, userId, uname, aid, gid], function(err) {
                if (err) {
                  res.status(500).send({ error: 'Failed to insert data' });
                } else {
                  if(pageNumber==="1"){
                    reloadAchivement1(res,gid,null);
                  }else if(pageNumber==="2"){
                    reloadAchivement2(res,gid,null);
                  }else if(pageNumber==="3"){
                    reloadAchivement3(res,gid,null);
                  }
                }
              }); 
            } else {
              res.status(404).send({ error: 'User not found' });
            }
          }
        });
      } catch (err) {
        res.status(401).send({error:'Invalid token'});
      }
    }
  }else{
    if(pageNumber==="1"){
      reloadAchivement1(res,gid, 'Need to log in to your account !');
    }else if(pageNumber==="2"){
      reloadAchivement2(res,gid, 'Need to log in to your account !');
    }else if(pageNumber==="3"){
      reloadAchivement3(res,gid, 'Need to log in to your account !');
    }
  }
});
app.post('/api/myPage/update/:comment', (req, res) => {
  const Token = req.cookies.token;
  const decoded = jwt.verify(Token, secret);
  const uname = decoded.id;
  const comment = req.body.comment;
  const cid = req.body.cid;
  if(Token){
    try {
      if(!comment){
        if(uname === "Admin"){
          reloadAdminpage(res,'Input required')
        }else{
          reloadUserpage(res,uname,'Input required')
        } 
      }else{
        db.run('UPDATE comments SET comment = ? WHERE cid = ?', [comment, cid], function(error) {
          if (error) {
            res.status(500).send({ error: 'Failed to update text' });
          } else {
            if(uname === "Admin"){
              reloadAdminpage(res,'Comment updated successfully!')
            }else{
              reloadUserpage(res,uname,'Comment updated successfully!')
            }
          }
        });
      }
    } catch (err) {
      res.status(401).send({error:'Invalid token'});
    }
  }else{
    res.status(404).render('404.handlebars');
  }   
});
app.post('/api/myPage/delete/:comment', (req, res) => {
  const Token = req.cookies.token;
  if(Token){
    const decoded = jwt.verify(Token, secret);
    const uname = decoded.id;
    const cid = req.body.cid;
    console.log(cid)
    try {
      if(cid){
        db.run('DELETE FROM comments WHERE cid = ?', [cid], function(error) {
          if (error) {
            res.status(500).send({ error: 'Database error' });
          } else {
            if(uname === "Admin"){
              reloadAdminpage(res,'Comment delede successfully!')
            }else{
              reloadUserpage(res,uname,'Comment delede successfully!')
            }
          }
        });
      }else {
        if(uname === "Admin"){
          reloadAdminpage(res,'Error!')
        }else{
          reloadUserpage(res,uname,'Error')
        }
      }
    } catch (err) {
      res.status(401).send({error:'Invalid token'});
    }
  }else{
    res.status(404).render('404.handlebars');
  }  
});
// CRUD operations on commenst（end）



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
