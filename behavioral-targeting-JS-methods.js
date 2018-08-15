//------------------------------------------//
//------------------------------------------//
//-----Behavioral Targeting Widget API------//
//------------------------------------------//
//------------------------------------------//

//-----showModal(campaign_id) ­ Show the modal or campaign setup
AddShoppersWidget.API.Behavioral.showModal(campaign_id);
example: AddShoppersWidget.API.Behavioral.showModal("1234567890");

//-----closeModal(campaign_id) ­ Close the modal
AddShoppersWidget.API.Behavioral.closeModal(campaign_id);
example: AddShoppersWidget.API.Behavioral.closeModal("1234567890");

//-----showSuccessModal(campaign_id) ­ Show success state of the modal
AddShoppersWidget.API.Behavioral.showSuccessModal(campaign_id);
example: AddShoppersWidget.API.Behavioral.showSuccessModal("!234567890");

//-----triggerOnModal(function, id) ­ Execute function when modal is shown / visible
AddShoppersWidget.API.Behavioral.triggerOnModal(function(data){ 
	console.log('this is a test', data);
	//data returns {campaign: object, event: string}
	//sample: campaign: {campaign_id: "12345", campaign_name: "test campaign", trigger: "custom"}, event: "BT_view"
});
//**for only this specific modal (recommended)
AddShoppersWidget.API.Behavioral.triggerOnModal(function(data){ 
	console.log('this is a test', data);
	//data returns {campaign: object, event: string}
	//sample: campaign: {campaign_id: "12345", campaign_name: "test campaign", trigger: "custom"}, event: "BT_view"
}, campaign_id);
example:
AddShoppersWidget.API.Behavioral.triggerOnModal(function(data){ 
	console.log('this is a test', data);
}, "1234567890");

//-----triggerOnAbandon(function) ­ Execute function on abandon
AddShoppersWidget.API.Behavioral.triggerOnAbandon(function(){ 
	console.log('this is a test');
  	AddShoppersWidget.API.Behavioral.showModal("1234567890");
});

//-----triggerOnSuccessModal(function, id) ­ Execute function on success view
AddShoppersWidget.API.Behavioral.triggerOnSuccessModal(function(data){ 
	console.log('this is a test', data);
	//data returns {campaign: object, event: string}
	//sample: campaign: {campaign_id: "12345", campaign_name: "test campaign", trigger: "custom"}, event: "BT_view"
});
//**for only a specific campaign do X on success
AddShoppersWidget.API.Behavioral.triggerOnSuccessModal(function(data){ 
	console.log('this is a test do X', data);
}, campaign_id);
example:
AddShoppersWidget.API.Behavioral.triggerOnSuccessModal(function(data){ 
	console.log('this is a test do X', data);
}, "1234567890");

//-----triggerOnClose(function, id) ­ Execute js when the modal is closed
AddShoppersWidget.API.Behavioral.triggerOnClose(function(data){
   console.log('this is a test', data);
   //data returns {campaign: object, event: string}
   //sample: campaign: {campaign_id: "12345", campaign_name: "test campaign", trigger: "custom"}, event: "BT_view"
});
//**do this only for a specific campaign (recommended)
AddShoppersWidget.API.Behavioral.triggerOnClose(function(data){
   console.log('this is a test', data);
}, campaign_id);
example:
AddShoppersWidget.API.Behavioral.triggerOnClose(function(data){
   console.log('this is a test', data);
}, "1234567890");

//-----getCampaigns(function) ­ Get campaigns: 
AddShoppersWidget.API.Behavioral.getCampaigns(function(data){ 
	console.log(data);
	//data returns an array of objects [ {}, {}, {}, {} ]
	//sample: campaign: [{campaign_id: "12345", campaign_name: "test campaign", trigger: "custom"},
	//			{campaign_id: "12345", campaign_name: "test campaign", trigger: "custom"},
	//			{campaign_id: "12345", campaign_name: "test campaign", trigger: "custom"},
	//			{campaign_id: "12345", campaign_name: "test campaign", trigger: "custom"}
	//			]
});

//track events and put in false for trackConversion so that it wont steal attributions if we want to track clicks on certain elements
AddShoppersWidget.API.User.track(eventName, trackConversion);


//successful email input, store email as string
AddShoppersWidget.API.Behavioral.triggerOnSuccessModal(function(data){ 
	console.log(data);
	//get amm addshoppers email inputs in selector array
    	var emailInputs = document.querySelectorAll(".addshop-b-mail-input");
	//loop through them and get the entered email
	for (i = 0; i < emailInputs.length; i++) {
	    if( emailInputs[i].value.length > 0 ){
			var email = emailInputs[i].value;
			console.log(email);
			//DO SOMETHING WITH EMAIL STRING
			break;
	    }
	}
}, "1234567890");


