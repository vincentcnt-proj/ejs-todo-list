//Include express and body-parser
const  express = require("express");
const  bodyParser = require("body-parser");

//Initiate express app and add settings
//Enable body-parser, enable static load from public folder, render with ejs
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.set('view engine', 'ejs');

//Create a basic array to auto include
var items = ["Look good", "Feel good", "Be good"];

//Set base return
app.get("/", function(req, res){

    //Initiate Date object and set options for later use
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    //Get usable Date string
    //Render items onto page
    var day = today.toLocaleDateString("en-US", options);
    res.render("list", {"typeOfDay": day, newListItems: items});
})

//Add item to array and re-render base page
app.post("/", function(req, res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

//Start express app on port 3000
app.listen(3000, function(){
    console.log("Server started on port 3000");
})