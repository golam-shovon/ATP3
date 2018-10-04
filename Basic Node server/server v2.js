var fs=require('fs');
var http=require('http');

var server=http.createServer(function(req,res)
{
	if(req.url=="/" || req.url=="/home")
	{
		fs.createReadStream('index.html').pipe(res);
	}
	else
	{
		res.end("Invalid Request....")
	}	
})

server.listen(3250);
console.log("serverstarted");