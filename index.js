// var http = require("http");
// var hServer = http.createServer((req,res) => {
//   res.statusCode = 200;
//   res.setHeader('content-type','text/html');
//   res.end('<h1>Hola mundo</h1>');
// });
//
// hServer.listen(3000, () =>{
//   console.log('Server listening on port: 3000');
// })

var express = require('express');
var morgan = require('morgan');
var hServer = express();

hServer.set('appName','Express tutorial');
hServer.set('port',3000);
hServer.set('view engine','ejs');

hServer.use(express.json());
hServer.use(morgan('dev'));

hServer.all('/user', (req,res,next) => {
  console.log('Aqui paso');
  next();
});

hServer.get('/',(req,res) => {
  const data = [{name: 'Jaime'},{name:'Lina'},{name:'Andres'}, {name:'Ryan'}]
  res.render('index.ejs', {people:data});
});

hServer.get('/user', (req, res) => {
  res.json({
    username: 'Cameron',
    lastname : 'Howe'
  });
});
hServer.post('/user/:id', (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.send('Peticion POST ');
});
hServer.put('/user/:id', (req, res) => {
  console.log(req.body);
  res.send(`User ${req.params.id} updated`);
});
hServer.delete('/user/:id', (req, res) => {
  res.send(`User ${req.params.id} deleted`);
});

hServer.use(express.static('public'));

hServer.listen(hServer.get('port'), () => {
  console.log(hServer.get('appName'));
  console.log('Server on port', hServer.get('port'));
});
