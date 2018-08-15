
AddShoppersWidget.API.Event.bind("share", function(params) { 
  //params returns an object {}
  // example params: {"source": "facebook", "event": "share"}
  
  //gather user info for the user that just shared
  var data = AddShoppersWidget.API.User.signed_data(); //this is the user data object returned from the network
  console.log(data);
	//DATA another object gets returned with userdata gathered from the network
	//{google_email: "mario@addshoppers.com", uuid: "1234567890", timestamp: 1534338253, google_firstname: "Mario", signature: "0987654321", timestamp: 12345, uuid: 34543j43j543j543j543j43543 }
});
