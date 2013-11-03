var loginController = (function() {
	
	//page events
	function pageInit() {
		//alert("page init login");
		bindUIActions();
		bindServiceMessages();
	}
	
	function pageShow() {
		//alert("page show login");
	}
	
	function bindUIActions() {
		loginButtonClicked();
	}
	
	function bindServiceMessages() {
		
	}
	
	//control events
	function loginButtonClicked() {
		$("#loginButton" ).on("click", function(event, ui) {
			var username = document.getElementById("usernameField").value;
			var password = $("#passwordField").value;
			amplify.publish('loginRequest', {username: username, password: password});
		});
	}
	
	//public module functions (API)
	return {
		pageInit : pageInit,
		pageShow : pageShow
	}
})();