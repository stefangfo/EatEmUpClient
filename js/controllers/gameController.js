var gameController = (function() {
	
	var map = null;
	
	//page events
	function pageInit() {
		//alert("page init");
		map = new mapController();
      	map.resize("map_canvas");
		bindUIActions();
	}
	
	function pageShow() {
		//alert("page show");
		map.initMap("map_canvas");
                
        setTimeout(function(){
        	$("#battlePopup").popup("open");
		},2000);
	}
	
	function bindUIActions() {
		cancelButtonPressed();
	}
	
	//control events	
	function cancelButtonPressed(){
		$("#cancelButtonGame" ).on("click", function(event, ui) {
			map.removeMarkers();
		});
	}
	
	//public module functions (API)
	return {
		pageInit : pageInit,
		pageShow : pageShow
	}
})();