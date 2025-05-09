const express = require('express');
const corst = require('cors');
const bodyparser= require("body-parsen");


const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyparser.json());

app.use('/api/subjeck', require('./routes/subject'));
app.use('/api/contact',require('./routes/contact'));

app.listen(PORT, () => {
    console.log('server running at http://localhost:' + PORT);
}); 