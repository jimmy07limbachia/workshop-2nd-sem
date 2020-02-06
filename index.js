var express = require("express");
var app = express();
var fs = require("fs");
var cors = require("cors");
app.use(cors());
app.use(express.static("root"));

let data = fs.readFileSync("./posts.json");
let json = JSON.parse(data)
console.log(json);


//GET method api
app.use(express.json());
app.get("/post",(req,res)=>{
	// json.push({"title":"Miren","desc":"Prajapati"});
	res.send(json);
	// res.send(req.params)
	// res.send(req.query);
});
//post method api
app.post("/post",(req,res)=>{
	json.push({"title":"Miren","desc":"Prajapati"})
	fs.writeFileSync("./posts.json",
	JSON.stringify(json,null,2));
	res.send(json);
});


app.listen(3000,()=>{
          console.log("listening on port 3000")});