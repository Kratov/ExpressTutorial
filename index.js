var http = require("http");
var hServer = http.createServer((req,res) => {
  res.statusCode = 200;
  res.setHeader('content-type','text/html');
  res.end('<h1>Hola mundo</h1>');
});

hServer.listen(3000, () =>{
  console.log('Server listening on port: 3000');
})
