var fs=require('fs');
var http=require('http');

/*basic code for creating server*/

/*var server=http.createServer(function(req,res)
{
	res.write('welcpme to hell ');
	res.write('reqiered page:' +req.url);
	res.end();
	
})*/

/*basic code for seeing text at server*/

/*var server=http.createServer(function(req,res)
{
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write('<h1>welcome hell</h1>');
	res.write('reqiered page:' +req.url);
	res.end();
	
})*/

/*basic code for reading text file at server*/

/*var server=http.createServer(function(req,res)
{
	fs.readFile('example.txt',function(err, data)
	{
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write(data);
	res.end();
	});
	
	
})*/

/*basic code for reading html file at server*/

var server=http.createServer(function(req,res)
{
	fs.readFile('example.html',function(err, data)
	{
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write(data);
	res.end();
	})
	
	
})

server.listen(3250);
console.log("serverstarted");