const express = require('express');
const app =  new express();

app.use(express.static('dist'));


app.listen(8080, ()=>{
	console.log("Server Started");
});
