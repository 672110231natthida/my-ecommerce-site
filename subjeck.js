const http = require('http');

const server = http.createServer(function(){
res.writeHead(200, {'content-Type':'text/json'});
res.write('{"contactSubject": ["Software Developer","System Administrator","Data Analyst","Cybersecurity Specialist","Cloud Engineer","UX/UI Designer","Other"}')

})

server.listen(4040)