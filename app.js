const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static(path.join(__dirname, '/app.css')));
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(app.get('port'), () =>
  console.log('running on port: ', app.get('port'))
);
