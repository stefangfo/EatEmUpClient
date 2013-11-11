var mapController = function(){
	
var map = null;
var goodies = [];	
var playerMarkers = [];
var playerCanvases = [];
var markerWidth = 62;
var markerHeight = 85;
var positioningInterval;
	
this.initMap = function(mapElement) {
	    var locationCenter = new google.maps.LatLng(48.337050, 14.319600);
		var mapOptions = {zoom: 17,
						  center: locationCenter,
						  mapTypeId: google.maps.MapTypeId.ROADMAP}
	    
	    if(!isInitialized(mapElement)) {
	    	 map = new google.maps.Map(document.getElementById(mapElement), mapOptions);
			 this.initMarkers(map);
			// getLocation();
		}else{
			//map already exists
			this.initMarkers(map);
			//  getLocation();
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
	playerMarkers[0].marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
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
	
	createCanvas("red", "stefan", 200, function(pngURL) {
		var player1 = new google.maps.Marker({
	    	position: new google.maps.LatLng(48.337428, 14.319928),
			map: map,
			icon: pngURL
		});
		playerMarkers.push({username: "stefan", marker: player1});	
		
		var amount = 0;
		setInterval(function() {
			amount = amount + 50;
			redrawMarker("stefan", amount);
		
		}, 2000);
		
	});
	
	createCanvas("red", "markus", 300, function(pngURL) {
		var redPlayer = new google.maps.Marker({
	    	position: new google.maps.LatLng(48.336718, 14.319592),
			map: map,
			icon: pngURL
		});
		playerMarkers.push({username: "markus", marker: redPlayer});
	});

	createCanvas("blue", "christian", 100, function(pngURL) {
		var bluePlayer1 = new google.maps.Marker({
	    	position: new google.maps.LatLng(48.336711, 14.319651),
			map: map,
			icon: pngURL
		});
		playerMarkers.push({username: "christian", marker: bluePlayer1});
	});	
	
	createCanvas("blue", "michael", 150, function(pngURL) {
		var bluePlayer2 = new google.maps.Marker({
	    	position: new google.maps.LatLng(48.337328, 14.321237),
			map: map,
			icon: pngURL
		});
		playerMarkers.push({username: "michael", marker: bluePlayer2});
		
		var amount = 0;
		setInterval(function() {
			amount = amount + 50;
			redrawMarker("michael", amount);
		
		}, 3000);
	});	
}

function createCanvas(type, username, points, loadedCallback) {
	var canvas, context;
	canvas = document.createElement("canvas");
    canvas.width = markerWidth;
    canvas.height = markerHeight;
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
	    	drawCanvas(context, username, imgs[0], imgs[1], points);
			playerCanvases.push({username : username, canvas : canvas, markerImg : imgs[0], userImg : imgs[1]});
			loadedCallback(canvas.toDataURL());
	    }
	};
	
	var errorCallback = function() {
	        drawCanvas(context, username, imgs[0], null, points);
			
			playerCanvases.push({username : username, canvas : canvas, markerImg : imgs[0], userImg : null});
			loadedCallback(canvas.toDataURL());
	}
 
    var imgs = [];
    for (var i = 0; i < imgSrcs.length; i++) {
	    imgs[i] = new Image();
	    imgs[i].addEventListener('load', loadCallback, false);
	    imgs[i].onerror = errorCallback;		
	    imgs[i].src = imgSrcs[i];
	}
}

function drawCanvas(context, username, markerImg, userImg, points) {
	 context.drawImage(markerImg, 0, 0, markerWidth, markerHeight);
	 context.fillStyle = "rgb(255,255,255)";
	 if (!(userImg == null)) {
		  context.drawImage(userImg, 5.0, 4, 52, 52);
	 }else {
	 	 context.textAlign = "center";
	 	 context.font = "15px sans-serif";
		 context.fillText(username, 31, 30); 
	 }
	 context.font = "10px sans-serif";
	 context.textAlign = "start";
	 context.fillRect (5.0,55,52,12);
	 context.fillStyle = "rgb(0,0,0)";
	 context.strokeText(points+" Pkt.", 12, 65); 
}

function redrawMarker(username, points) {
	var playerCanvas = getCanvasByUsername(username);
	//clear old canvas 
	var canvas = playerCanvas.canvas;
	var context = canvas.getContext("2d");
	context.clearRect(0, 0, markerWidth, markerHeight);
	//draw new canvas
	drawCanvas(context, username, playerCanvas.markerImg, playerCanvas.userImg, points)
		
	//set new canvas to marker
	var marker = getMarkerByUsername(username).marker;
	marker.setIcon(canvas.toDataURL());
}

function getCanvasByUsername(username) {
	returnVal = null;
	for (i=0; i<playerCanvases.length; i++){
		if (playerCanvases[i].username == username) {
			returnVal = playerCanvases[i];
			return returnVal;
		}
	}
}

function getMarkerByUsername(username) {
	returnVal = null;
	for (i=0; i<playerMarkers.length; i++){
		if (playerMarkers[i].username == username) {
			returnVal = playerMarkers[i];
			return returnVal;
		}
	}
}

this.removeMarkers = function(){
	for (i=0; i<goodies.length; i++){
		goodies[i].setMap(null);
	}
	goodies = [];
	
	for (i=0; i<playerMarkers.length; i++){
		playerMarkers[i].marker.setMap(null);
	}
	playerMarkers = [];
	
	for (i=0; i<playerCanvases.length; i++){
		playerCanvases[i].canvas = null;
	}
	playerCanvases = [];
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


