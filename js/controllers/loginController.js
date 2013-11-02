var loginController = (function() {
	
	//page events
	function pageInit() {
		//alert("page init login");
		bindUIActions();
	}
	
	function pageShow() {
		//alert("page show login");
	}
	
	function bindUIActions() {
		loginButtonClicked();
	}
	
	//control events
	function loginButtonClicked() {
		$("#loginButton" ).on("click", function(event, ui) {
			
		});
	}
	
	//public module functions (API)
	return {
		pageInit : pageInit,
		pageShow : pageShow
	}
})();