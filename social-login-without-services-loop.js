<script type="text/javascript"> 
// To configure which login buttons are used here, go down to the comment that says BUTTONS HERE
var asService ="facebook";
// Init code					
function init() {
   AddShoppersWidget.API.Event.bind("sign_in", createAccount);		
};
// Create Account 
function createAccount(params) {		
   if (params.source == "social_login") {				
		services = ['facebook', 'google', 'linkedin', 'twitter', 'paypal'];
		var data = AddShoppersWidget.API.User.signed_data(); 
		//for( var i=0; i < services.length; i++ ) {				
			service = asService;
			if (AddShoppersWidget.API.User.signed(service)) {
        		var email = data[service + '_email'];
        		if (service == 'twitter') {
           			//alert('popup get email'); 
           			var email = prompt("Please enter your email", "");
        		};
        		if (email) {
          			if (service !='twitter' ) {				   
        		  		var name = data[service + '_firstname'] + '_' + data[service + '_lastname']; 
          			} else {
	       				var name = data[service + '_name']; 
          			};
	     			   name = name.replace(/ /g, '­-');
              //-------LOGIN NEW JS HERE
              console.log(service);
	      			//break; 
        		};
     		}; 
  		};	
  	//};				
}
					
// Bind events
if (window.addEventListener) {			
   window.addEventListener("load", init, false); 
} else {
   document.onreadystatechange = function() { 
    if(document.readyState in {loaded: 1, complete: 1}) {
	document.onreadystatechange = null; 
       init();			
    } 
  }					
} 
</script>					

<!-- Facebook -->
<div class="social-commerce-signin-facebook" data-style="logoandtext" data-size="small" onclick="asService='facebook';"></div>
<!-- Paypal -->
<div class="social-commerce-signin-paypal" data-style="logoandtext" data-size="small" onclick="asService='paypal';"></div>
<!--LinkedIn -->				
<div class="social-commerce-signin-linkedin" data-style="logoandtext" data-size="small" onclick="asService='linkedin';"></div>
<!-- Google -->				
<div class="social-commerce-signin-google" data-style="logoandtext" data-size="small" onclick="asService='google';"></div>
