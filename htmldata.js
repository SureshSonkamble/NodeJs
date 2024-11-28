var http = require('http');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const url = req.url;
	if(url ==='/about') {
		fs.readFile('test.html', function(err, data) {
            res.write(data);
            return res.end();
          });
	}
	else if(url ==='/boot') {
		fs.readFile('boot.html', function(err, data) {
            res.write(data);
            return res.end();
          });
	}
    else if(url ==='/apicall') {
		fs.readFile('apicall.html', function(err, data) {
            res.write(data);
            return res.end();
          });
	}
	else {
		fs.readFile('login.html', function(err, data) {
            res.write(data);
            return res.end();
          });
	}

}).listen(3000, '192.168.1.16', () => {
    console.log('Listening on 127.0.0.1:3000');
  });
  
