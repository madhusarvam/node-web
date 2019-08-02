const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');



app.use((req, res, next)=>{
	var now = new Date().toString();
	var log = `${now}: ${req.method} ${req.url}`;
	console.log(log);
	fs.appendFileSync('server.log',log+'\n');
   next();
})

/*app.use((req, res, next)=>{
	res.render('maintain.hbs',{
		pageTitle : 'Maintain Page Madhu',
		homeTitle : "Maintain Page",
		
	});
})*/
app.use(express.static(__dirname+'/public'));
hbs.registerHelper('getCurrentYear',()=>{
	return new Date().getFullYear()
});  

hbs.registerHelper('screemIt',(text)=>{
	return text.toUpperCase()
}); 	

 
app.get('/',(req, res)=>{
	res.render('home.hbs',{
		pageTitle : 'Home Page Madhu',
		homeTitle : "Home Welcome Page",
		
	});
});

app.get('/about',(req, res)=>{
	res.render('about.hbs',{
		pageTitle : 'About Page Madhu',

		
	});
	
});

app.get('/bad',(req, res)=>{
	res.send({
		error : "Invalid Request"
	});
	
});

app.listen(3001,()=>{
	console.log('Server is up 30001')
});