const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const push = require('./server/push');
const cron = require('node-cron');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Almacenar la suscripción
app.post('/api/subscribe', (req, res) => {


  const suscripcion = req.body;

  
  push.addSubscription( suscripcion );

  res.json('subscribe');

});

// Envar una notificación PUSH a las personas
// que nosotros queramos
// ES ALGO que se controla del lado del server
cron.schedule('0 9 * * *', function() {

    push.sendPush();

});
  
app.listen(process.env.PORT || 8080);