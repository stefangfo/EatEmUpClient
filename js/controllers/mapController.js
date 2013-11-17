var mapController = function(){
	
var map = null;
var goodies = [];	
var playerAvatars = [];
var playerAvatarWidth = 72;
var playerAvatarHeight = 95;
var positioningInterval;
	
this.initMap = function(mapElement) {
	    var locationCenter = new google.maps.LatLng(48.337050, 14.319600);
		var mapOptions = {zoom: 17,
						  center: locationCenter,
						  mapTypeId: google.maps.MapTypeId.ROADMAP}
	    
	    if(!isInitialized(mapElement)) {
	    	 map = new google.maps.Map(document.getElementById(mapElement), mapOptions);
			 this.initMarkers(map);
			//getLocation();
		}else{
			//map already exists
			this.initMarkers(map);
			//getLocation();
		}
}

function getLocation() {
  if (navigator.geolocation) {
  	positioningInterval = setInterval(function() {
	  	navigator.geolocation.getCurrentPosition(showPosition, geolocationError, {enableHighAccuracy: true});
  	}, 500);
  } else {
  		alert("Positionsbestimmung auf diesem Gerät nicht möglich");
  	}
}

function showPosition(position){
	playerAvatars[0].marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
}

function geolocationError(error){
}

function isInitialized(id) {
    return !! document.getElementById(id).firstChild;
}


this.stopPositioning = function() {
	clearInterval(positioningInterval);
}


this.initMarkers = function(map){
	
	var standardImg = new google.maps.MarkerImage("img/standard.png",
												    null, /* size is determined at runtime */
												    null, /* origin is 0,0 */
												    null, /* anchor is bottom center of the scaled image */
												    new google.maps.Size(10, 10));
												    
	var bigImg = new google.maps.MarkerImage("img/big.png",
												    null, /* size is determined at runtime */
												    null, /* origin is 0,0 */
												    new google.maps.Point(0, 10), /* anchor is bottom center of the scaled image */
												    new google.maps.Size(20, 20));	
	
	
	var standardGoodie1 = new google.maps.Marker({
    	position: new google.maps.LatLng(48.337066, 14.318477),
		map: map,
		icon: standardImg
	});
	var standardGoodie2 = new google.maps.Marker({
    	position: new google.maps.LatLng(48.337191, 14.318498),
		map: map,
		icon: standardImg
	});
	var standardGoodie3 = new google.maps.Marker({
    	position: new google.maps.LatLng(48.337191, 14.318498),
		map: map,
		icon: standardImg
	});
	var standardGoodie4 = new google.maps.Marker({
    	position: new google.maps.LatLng(48.3369554, 14.318458),
		map: map,
		icon: standardImg
	});
	
	var bigGoodie1 = new google.maps.Marker({
    	position: new google.maps.LatLng(48.338027, 14.319364),
		map: map,
		icon: bigImg
	});
	var bigGoodie2 = new google.maps.Marker({
    	position: new google.maps.LatLng(48.337952, 14.320378),
		map: map,
		icon: bigImg
	});
	
	goodies.push(standardGoodie1);
	goodies.push(standardGoodie2);
	goodies.push(standardGoodie3);
	goodies.push(standardGoodie4);
	goodies.push(bigGoodie1);
	goodies.push(bigGoodie2);
	
	createPlayerAvatar("red", "stefan", 200, function(pngURL, canvas) {
		var player1 = new google.maps.Marker({
	    	position: new google.maps.LatLng(48.337428, 14.319928),
			map: map,
			icon: pngURL
		});
		//callout
		var infoWindowOpts = {
		  content: "stefan"
		};

		var infoWindow = new google.maps.InfoWindow(infoWindowOpts);
		google.maps.event.addListener(player1, 'click', function() {
		  infoWindow.open(map, player1);
		});
		
		playerAvatars.push({userID: "", username: "stefan", marker: player1, canvas: canvas});	
		var amount = 0;
		setInterval(function() {
			amount = amount + 50;
			redrawPlayerAvatar("stefan", amount, "invincible");
		
		}, 2000);
		
	});
	
	createPlayerAvatar("red", "markus", 300, function(pngURL, canvas) {
		var redPlayer = new google.maps.Marker({
	    	position: new google.maps.LatLng(48.336718, 14.319592),
			map: map,
			icon: pngURL
		});
		
		//callout
		var infoWindowOpts = {
		  content: "markus"
		};

		var infoWindow = new google.maps.InfoWindow(infoWindowOpts);
		google.maps.event.addListener(redPlayer, 'click', function() {
		  infoWindow.open(map, redPlayer);
		});
		playerAvatars.push({userID: "", username: "markus", marker: redPlayer, canvas: canvas});
	});

	createPlayerAvatar("blue", "christian", 100, function(pngURL, canvas) {
		var bluePlayer1 = new google.maps.Marker({
	    	position: new google.maps.LatLng(48.336711, 14.319651),
			map: map,
			icon: pngURL
		});
		
		//callout
		var infoWindowOpts = {
		  content: "christian"
		};

		var infoWindow = new google.maps.InfoWindow(infoWindowOpts);
		google.maps.event.addListener(bluePlayer1, 'click', function() {
		  infoWindow.open(map, bluePlayer1);
		});
		playerAvatars.push({userID: "", username: "christian", marker: bluePlayer1, canvas: canvas});
	});	
	
	createPlayerAvatar("blue", "michael", 150, function(pngURL, canvas) {
		var bluePlayer2 = new google.maps.Marker({
	    	position: new google.maps.LatLng(48.337328, 14.321237),
			map: map,
			icon: pngURL
		});
		
		//callout
		var infoWindowOpts = {
		  content: "michael"
		};

		var infoWindow = new google.maps.InfoWindow(infoWindowOpts);
		google.maps.event.addListener(bluePlayer2, 'click', function() {
		  infoWindow.open(map, bluePlayer2);
		});
		playerAvatars.push({userID: "", username: "michael", marker: bluePlayer2, canvas: canvas});
		
		var amount = 0;
		setInterval(function() {
			amount = amount + 50;
			redrawPlayerAvatar("michael", amount, "doublePoints");
		}, 3000);
	});	
}

function createPlayerAvatar(type, username, points, loadedCallback) {
	var canvas, context;
	canvas = document.createElement("canvas");
    canvas.width = playerAvatarWidth;
    canvas.height = playerAvatarHeight;
    context = canvas.getContext("2d");
    
    var imgSrcs;
    if (type == "me") {
    	imgSrcs = ["img/meAvatar.png", "img/"+username+".png"];
    }else if (type == "blue") {
	    imgSrcs = ["img/blueAvatar.png", "img/"+username+".png"];
    }else {
	    imgSrcs = ["img/redAvatar.png", "img/"+username+".png"];
    }
    
    var loaded = 0;
	var loadCallback = function () {
    	loaded++;
	    if (loaded == imgSrcs.length) {
	    	drawPlayerAvatar(context, username, imgs[0], imgs[1], points, null);
			loadedCallback(canvas.toDataURL(), {canvas: canvas, markerImg: imgs[0], userImg: imgs[1]});
	    }
	};
	
	var errorCallback = function() {
	        drawPlayerAvatar(context, username, imgs[0], null, points, null);
			loadedCallback(canvas.toDataURL(), {canvas: canvas, markerImg: imgs[0], userImg: null});
	}
 
    var imgs = [];
    for (var i = 0; i < imgSrcs.length; i++) {
	    imgs[i] = new Image();
	    imgs[i].addEventListener('load', loadCallback, false);
	    imgs[i].onerror = errorCallback;		
	    imgs[i].src = imgSrcs[i];
	}
}

function drawPlayerAvatar(context, username, markerImg, userImg, points, specialAction) {
	context.drawImage(markerImg, 0, 10, 62, 85);
	context.fillStyle = "rgb(255,255,255)";
	if (!(userImg == null)) {
		context.drawImage(userImg, 5.0, 15, 52, 52);
	}else {
		context.textAlign = "center";
	 	context.font = "15px sans-serif";
	 	if (username.length > 6){
		 	username = username.substr(0, 6);
	 	}
		context.fillText(username, 31, 30); 
	}
	context.font = "10px sans-serif";
	context.textAlign = "center";
	context.fillRect (5.0,65,52,12);
	context.fillStyle = "rgb(0,0,0)";
	context.lineWidth = 1;
	context.strokeText(points+" Pkt.", 31, 75); 
	
	if (specialAction) {
		context.beginPath();
		context.arc(55,16.5,15,0,2*Math.PI);
		context.lineWidth = 3;
		context.strokeStyle = "rgb(0,0,0)";
		context.stroke();
		context.fillStyle = 'white';
		context.fill();
		context.lineWidth = 1;
		if (specialAction == "invincible") {
			context.strokeText("UN", 55, 20);
		}else {
			context.strokeText("x2", 55, 20);
		}
	}
}

//userID instead of username!!!!!
function redrawPlayerAvatar(username, points, specialAction) {
	var playerAvatar = getPlayerAvatarByUsername(username);
	//clear old canvas 
	var canvas = playerAvatar.canvas.canvas;
	var context = canvas.getContext("2d");
	context.clearRect(0, 0, playerAvatarWidth, playerAvatarHeight);
	
	//draw new canvas
	drawPlayerAvatar(context, username, playerAvatar.canvas.markerImg, playerAvatar.canvas.userImg, points, specialAction)
	
	//set new canvas to marker
	playerAvatar.marker.setIcon(canvas.toDataURL());
}

//needs to be changed to userID!!!!!
function getPlayerAvatarByUsername(username) {
	returnVal = null;
	for (i=0; i<playerAvatars.length; i++){
		if (playerAvatars[i].username == username) {
			returnVal = playerAvatars[i];
			return returnVal;
		}
	}
}

this.removeMarkers = function(){
	for (i=0; i<goodies.length; i++){
		goodies[i].setMap(null);
	}
	goodies = [];
	
	for (i=0; i<playerAvatars.length; i++){
		playerAvatars[i].marker.setMap(null);
		
	}
	for (i=0; i<playerAvatars.length; i++){
		playerAvatars[i].canvas.canvas = null;
	}
	playerAvatars = [];
}
 
this.resize = function(mapElement){
	//resize map in relation to screen height
    var height = $(window).height() - 140;
    var width = $(window).width();
    //alert(height);
   
    $("#"+mapElement).height(height);
    $("#"+mapElement).width(width);
    
    google.maps.event.trigger($("#"+mapElement), 'resize'); 
}



	
	
}


