var loginSelectionController = (function() {
	
	//page events
	function pageInit() {
		bindUIActions();
	}
	
	function pageBeforeShow() {
	}
	
	function pageShow() {
	}
	
	function bindUIActions(){
		fbLoginClicked();
	}
		
	fbLoginClicked = function(){
		$("#fbLoginButton").on("click", function(event, ui) {
			facebookHandler.login(); 
		});
		
		$("#standardLoginButton").on("click", function(event, ui) {
			$.mobile.changePage("#loginPage", { transition: "slide", changeHash: true }); 
		});
	}
	
	//public module functions (API)
	return {
		pageInit : pageInit,
		pageBeforeShow : pageBeforeShow,
		pageShow : pageShow
	}
})();