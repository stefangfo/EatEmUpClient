var gameSpectatorController = (function() {
	
	var map = null;
	
	//page events
	function pageInit() {
		map = new mapController();
     	map.resize("map_canvas_spectator");
		bindUIActions();
	}
	
	function pageShow() {
		//alert("page show login");
		map.initMap("map_canvas_spectator");
	}
	
	function bindUIActions() {
		cancelButtonPressed();
	}
	
	//control events
	function cancelButtonPressed(){
		$("#cancelButtonSpectatorGame" ).on("click", function(event, ui) {
			map.removeMarkers();
		});
	}
	
	//public module functions (API)
	return {
		pageInit : pageInit,
		pageShow : pageShow
	}
})();