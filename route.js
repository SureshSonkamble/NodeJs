var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    const url = req.url;
	if(url ==='/about') {
		res.write(' Welcome to about us page'); 
		res.end(); 
	}
	else if(url ==='/contact') {
		res.write(' Welcome to contact us page'); 
		res.end(); 
	}
	else {
		res.write('Hello World!'); 
		res.end(); 
	}
    
}).listen(3000, '192.168.184.71', () => {
  console.log('Listening on 192.168.184.71:3000');
});
