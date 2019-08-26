var express = require('express');
var app = express();


let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('views'));
app.use(express.static('css'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



let db = [];
let viewPath = __dirname + "/views";

let fileName = viewPath + "index.html";
app.use(express.static('css'));

app.get('/', function (req, res) {
    let fileName = viewPath + "index.html";
    res.send(fileName);

});

app.post('/newTask', function (req, res) {

    db.push({
        taskName:req.body.taskName,
        taskDueDate:req.body.dueDate,
        taskDescription:req.body.taskDescription

    });
    console.log(db);
})
app.get('/listTasks',function(req,res){
    res.render('listTasks.html');
})

app.listen(8085);