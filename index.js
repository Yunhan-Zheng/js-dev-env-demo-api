var express =  require('express');
var cors = require('cors');

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.get('/tripPlan', function(req,res){
  //hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id":1, "startCity":"Boston", "endCity":"New York", "period":"05.21-05.23"},
    {"id":2, "startCity":"New York", "endCity":"Bozeman", "period":"05.23-05.24"},
    {"id":3, "startCity":"Bozeman", "endCity":"Montana", "period":"05.24-05.26"},
    {"id":4, "startCity":"Montana", "endCity":"Wyoming", "period":"05.26-05.27"}
  ]);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port')); 
});