var gameController = (function() {
	
	var map = null;
	var progressInterval = null;
	
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
        	var startVal = 100;
        	
        	
        	progressInterval = setInterval(function(){
        		$(".progress-bar span").css("width", startVal+"%");
        		if (startVal == -10) {
	        		$("#battlePopup").popup( "close" );
        		}else{
	        		startVal = startVal - 10;
        		}
        	},1000);
		},2000);
	}
	
	function bindUIActions() {
		cancelButtonPressed();
	}
	
	//control events	
	function cancelButtonPressed(){
		$("#cancelButtonGame" ).on("click", function(event, ui) {
			map.stopPositioning();
			map.removeMarkers();	
			clearInterval(progressInterval);
			$(".progress-bar span").css("width", "100%");
		});
	}
	
	function resizeMap(){
		map.resize("map_canvas");
	}
	
	//public module functions (API)
	return {
		pageInit : pageInit,
		pageShow : pageShow,
		resizeMap : resizeMap
	}
})();