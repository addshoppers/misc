//------------------------------------------//
//------------------------------------------//
//-----Behavioral Targeting Widget API------//
//------------------------------------------//
//------------------------------------------//


//getCampaigns(function) ­ Get campaigns: 
AddShoppersWidget.API.Behavioral.getCampaigns(function(data){ 
	console.log(data);
});


//showModal(campaign_id) ­ Show modal
AddShoppersWidget.API.Behavioral.showModal(campaign_id);


//closeModal(campaign_id) ­ Close modal
AddShoppersWidget.API.Behavioral.closeModal(campaign_id);


//showSuccessModal(campaign_id) ­ Show success view
AddShoppersWidget.API.Behavioral.showSuccessModal(campaign_id);


//triggerOnModal(function, id) ­ Execute function on modal
AddShoppersWidget.API.Behavioral.triggerOnModal(function(data){ 
	console.log('this is a test', data);
});


//triggerOnAbandon(function) ­ Execute function on abandon
AddShoppersWidget.API.Behavioral.triggerOnAbandon(function(){ 
	console.log('this is a test');
});


//triggerOnSuccessModal(function, id) ­ Execute function on success view
AddShoppersWidget.API.Behavioral.triggerOnSuccessModal(function(data){ 
	console.log('this is a test', data);
});


//triggerOnClose(function, id) ­ Execute function on close modal
AddShoppersWidget.API.Behavioral.triggerOnClose(function(data){
   console.log('this is a test', data);
});

//track events and put in false for trackConversion so that it wont steal attributions if we want to track clicks on certain elements
AddShoppersWidget.API.User.track(eventName, trackConversion);
