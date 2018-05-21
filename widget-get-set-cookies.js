
//-------convet time to seconds:
//-------86400 = 1 day, //60 = 1 min, //3600 = 1 hr

var days = 1;
days = days * 60 * 60 * 24;
  
var hours = 1;
hours = hours * 60 * 60;
  
var mins = 1;
mins = mins * 60;

//-------set a cookie
//false - sets an expiration date, //true - dont let it expire
AddShoppersWidget.set_cookie("MyCookieName", "some value can be 1", 86400, false); 
AddShoppersWidget.set_cookie("MyCookieName", "some value can be 1", days, false); 

//-------get a cookie
AddShoppersWidget.get_cookie("MyCookieName");

//-------check if a cookie exists
if(AddShoppersWidget.get_cookie("MyCookieName")){
	console.log("cookie exists!");
}else {
	console.log("no cookie");
}

//-------delete a cookie
AddShoppersWidget.set_cookie("MyCookieName", "some value can be 1", -1, false); 
