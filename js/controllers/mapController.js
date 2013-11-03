var mapController = function(){
	
var map = null;
var goodies = [];	
var players = [];
	
this.initMap = function(mapElement) {
	    var locationCenter = new google.maps.LatLng(48.337050, 14.319600);
		var mapOptions = {zoom: 17,
						  center: locationCenter,
						  mapTypeId: google.maps.MapTypeId.ROADMAP}
	    
	    if(!isInitialized(mapElement)) {
	    	 map = new google.maps.Map(document.getElementById(mapElement), mapOptions);
			 this.initMarkers(map);
			 getLocation();
		}else{
			//map already exists
			this.removeMarkers();
			this.initMarkers(map);
		}
}

function getLocation() {
  if (navigator.geolocation) {
  	setInterval(function() {
  		//console.log("geo");
	  	navigator.geolocation.getCurrentPosition(showPosition, geolocationError, {enableHighAccuracy: true});
  	}, 500);
  } else {
  		alert("Positionsbestimmung auf diesem Gerät nicht möglich");
  	}
}

function showPosition(position){
	//console.log("Geo");
	//alert("Latitude: "+position.coords.latitude + " Longitude: "+position.coords.longitude);
	
	players[0].setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
}

function geolocationError(error){
}

function isInitialized(id) {
    return !! document.getElementById(id).firstChild;
}

this.removeMarkers = function(){
	for (i=0; i<goodies.length; i++){
		goodies[i].setMap(null);
	}
	goodies = [];
	
	for (i=0; i<players.length; i++){
		players[i].setMap(null);
	}
	players = [];
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
	
	var player1Img = new google.maps.MarkerImage("img/player1.png",
												    null, /* size is determined at runtime */
												    null, /* origin is 0,0 */
												    new google.maps.Point(0, 15), /* anchor is bottom center of the scaled image */
												    new google.maps.Size(30, 30));	
												    
	var redPlayerImg = new google.maps.MarkerImage("img/redPlayer.png",
												    null, /* size is determined at runtime */
												    null, /* origin is 0,0 */
												    new google.maps.Point(0, 15), /* anchor is bottom center of the scaled image */
												    new google.maps.Size(30, 30));
												    
												    									   
   	var bluePlayerImg = new google.maps.MarkerImage("img/bluePlayer.png",
												    null, /* size is determined at runtime */
												    null, /* origin is 0,0 */
												    new google.maps.Point(0,15), /* anchor is bottom center of the scaled image */
												    new google.maps.Size(30, 30));
	
	
	var standardGoodie1 = new google.maps.Marker({
    	position: new google.maps.LatLng(48.337066, 14.318477),
		map: map,
		icon: standardImg,
		title:"Hello World!"
	});
	var standardGoodie2 = new google.maps.Marker({
    	position: new google.maps.LatLng(48.337191, 14.318498),
		map: map,
		icon: standardImg,
		title:"Hello World!"
	});
	var standardGoodie3 = new google.maps.Marker({
    	position: new google.maps.LatLng(48.337191, 14.318498),
		map: map,
		icon: standardImg,
		title:"Hello World!"
	});
	var standardGoodie4 = new google.maps.Marker({
    	position: new google.maps.LatLng(48.3369554, 14.318458),
		map: map,
		icon: standardImg,
		title:"Hello World!"
	});
	
	var bigGoodie1 = new google.maps.Marker({
    	position: new google.maps.LatLng(48.338027, 14.319364),
		map: map,
		icon: bigImg,
		title:"Hello World!"
	});
	var bigGoodie2 = new google.maps.Marker({
    	position: new google.maps.LatLng(48.337952, 14.320378),
		map: map,
		icon: bigImg,
		title:"Hello World!"
	});
	
	goodies.push(standardGoodie1);
	goodies.push(standardGoodie2);
	goodies.push(standardGoodie3);
	goodies.push(standardGoodie4);
	goodies.push(bigGoodie1);
	goodies.push(bigGoodie2);
	
	var player1 = new google.maps.Marker({
    	position: new google.maps.LatLng(48.337428, 14.319928),
		map: map,
		animation: google.maps.Animation.DROP,
		icon: player1Img,
		title:"Hello World!"
	});
	
	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(player1, 'click', function() {
		infowindow.setContent("<strong>Stefan</strong> </br></br> <span id=\"totalPoints\">200 Punkte</span>");
		infowindow.open(this.map, player1);
	});
	
	
	var redPlayer = new google.maps.Marker({
    	position: new google.maps.LatLng(48.336711, 14.319651),
		map: map,
		animation: google.maps.Animation.DROP,
		icon: redPlayerImg,
		title:"Hello World!"
	});
	
	var bluePlayer = new google.maps.Marker({
    	position: new google.maps.LatLng(48.336718, 14.319592),
		map: map,
		animation: google.maps.Animation.DROP,
		icon: bluePlayerImg,
		title:"Hello World!"
	});
	
	var distance = google.maps.geometry.spherical.computeDistanceBetween (redPlayer.position, bluePlayer.position);
	//alert(distance);
	
	 google.maps.event.addListener(map, 'zoom_changed', function() {
		 redPlayer.setIcon(redPlayerImg);
	 });
	
	players.push(player1);
	players.push(redPlayer);
	players.push(bluePlayer);	
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


