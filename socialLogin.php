<?php
header("Access-Control-Allow-Origin: *");



//addshoppers api secret
$AddShoppersSecret = "XXXXXXXXXX";

//Shopify api user and key and store url
$apiUser = "XXXXXXXXXX";
$apiKey = "XXXXXXXXXX";
$apiPass = "XXXXXXXXXX";
$apiSecret = "XXXXXXXXXX";
$apiStoreUrl = "https://XXXXX.myshopify.com";

//secret codes for password hashes (you make these up)
$mySecret1 = "@dsfdsj$56j57sdsfdfdsjf*(fjdj_32!";
$mySecret2 = "#*Fjcjw@%gj^kgnb&dsfsdfdsfdsfdskd)fjhedY";



//var_dump($_GET);
//$userEmail = $_GET["email"];
$userFName = $_GET["fname"];
$userLName = $_GET["lname"];
// validate signature
$params = $_GET["data"];
$signature = null;
$p = array();

foreach($params as $key => $value)
{
    if($key == "signature")
        $signature = $value;
    else
    	$p[] = $key . "=" . $value;

    $pos = strpos($key, "_email");
    if($pos){
	$userEmail = $value;
    }
}
asort($p);
$query = $AddShoppersSecret . implode($p);
$hashed = hash("md5", $query);
if($signature !== $hashed){
        die("false");
}

//--first pass
$hash1 =$userEmail; //This creates a more secure hash
$pass1 = hash_hmac('sha256', $hash1, $mySecret1);
//second pass
$pass2 = hash_hmac('sha256', $pass1, $mySecret2);

$passout = substr($pass2, 0,12);



//-------see if customer exists in system
$verb = 'GET';
$url = $apiStoreUrl."/admin/customers/search.json?query=".$userEmail;
$request = '';
$getCustomer = ShopifyApi($url,$verb,$request,$apiKey,$apiPass);
$getCustomer = json_decode($getCustomer,true);
if(count($getCustomer["customers"]) > 0){
	$doesCustomerExist = true;
} else {
	$doesCustomerExist = false;
}

if($doesCustomerExist != ""){ //customer exists
	//get id
	//$doesCustomerExist = json_decode($doesCustomerExist);
	$custID = $getCustomer['customers'][0]['id'];

	//Update their password to new pass from social login
	$verb = 'PUT';
	$url = $apiStoreUrl."/admin/customers/".$custID.".json";
	$request = '{
                "customer": {
			"id": "'.$custID.'",
                        "password": "'.$passout.'",
                        "password_confirmation": "'.$passout.'"
                }
	}';
	ShopifyApi($url,$verb,$request,$apiKey,$apiPass);

} else { //customer doesnt exist
	//-------Customer doesn't exist so create customer
	$verb = 'POST';
	$url = $apiStoreUrl."/admin/customers.json";
	$request = '{
		"customer": {
                	"first_name":"'.$userFName.'",
                	"last_name":"'.$userLName.'",
                	"email":"'.$userEmail.'",
    			"verified_email": false,
    			"password": "'.$passout.'",
    			"password_confirmation": "'.$passout.'",
    			"send_email_welcome": true
  		}
	}';
	ShopifyApi($url,$verb,$request,$apiKey,$apiPass);
}

echo "true|";
echo $passout;

//function to make all the api calls
function ShopifyApi($url,$verb,$request,$apiUser,$apiKey){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_URL, $url);

        switch (strtoupper($verb)) {
                case 'POST':
                        curl_setopt($ch, CURLOPT_POST, "POST");
                        curl_setopt($ch, CURLOPT_POSTFIELDS, $request);
                        break;
                case 'PUT':
                        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
                        curl_setopt($ch, CURLOPT_POSTFIELDS, $request);
                        break;
                case 'DELETE':
                        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
                        curl_setopt($ch, CURLOPT_POSTFIELDS, $request);
                        break;
        }
	curl_setopt($ch, CURLOPT_USERPWD, "$apiUser:$apiKey");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json; charset=utf-8", "Token: $apiKey", "Accept: application/json"));
        $response = curl_exec($ch);
        $responseInfo = curl_getinfo($ch);
        //var_dump($response);
        curl_close($ch);
        return $response;
}


?>
