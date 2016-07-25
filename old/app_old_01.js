var express = require("express");

var app = express();

app.use("/middleware", function(req, res, next) {
	console.log(req.url);
	/*setTimeout(function() {
		next();
	}, 5000);*/
	next();
});


app.get("/", function(req, res) {
	res.send("Hallo Welt da draußen!");
});

app.get("/startseite", function(req, res) {
	res.send("Ich bin die Startseite.");
});

app.listen(8080);


