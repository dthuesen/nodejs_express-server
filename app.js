var express = require("express");

var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/public", express.static("public"));

app.get("/", function(req, res) {
	res.render("pages/landing")
});

app.get("/result", function(req, res) {

	var kg = parseInt(req.query.kg, 10);
	var m = (parseInt(req.query.cm, 10) / 100);
	var bmi= (kg/(m + m));

	if (bmi == 0 || isNaN(bmi)) {
		res.redirect("/")
	} else {
		res.render("pages/result", {
			bmi: bmi
		});
	}
});

app.listen(8080);


