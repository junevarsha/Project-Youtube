const express = require('express');
const path = require('path');
const port = process.env.PORT || 8083;

const app = express();
app.use(express.static(__dirname));

app.get('*', (req,res) => {
	res.sendfile(path.resolve(__dirname, 'index.html'))
});

app.listen(port);
console.log("server started");