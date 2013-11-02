var selectController = (function() {
	
	//page events
	function pageInit() {
		//alert("page init login");
		bindUIActions();
	}
	
	function pageShow() {
		//alert("page show login");
	}
	
	function bindUIActions(){
	}
	
	//control events
		
	//public module functions (API)
	return {
		pageInit : pageInit,
		pageShow : pageShow
	}
})();