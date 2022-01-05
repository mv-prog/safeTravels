const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/safetravels'));
app.get('/',function(req,res){
    res.sendFile(path.join('index.html', {root: 'dist/safetravels'}));
});

app.listen(process.env.PORT || 8080);