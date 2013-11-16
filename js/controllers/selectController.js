var selectController = (function() {
	//page events
	function pageInit() {
		bindUIActions();
	}
	
	function pageBeforeShow() {
		$("#username").text(accountData.getUsername());
		$("#selectPage .totalPoints").text(accountData.getPoints());
		$("#refCode").text(accountData.getCode());
		
		if (accountData.isFacebookLogin()) {
			console.log("Load picture now!");
		}else {
			
		}
	}
	
	function pageShow() {
	}
	
	function bindUIActions(){
		logoutTap();
		listRowTap();
	}
	
	//control events
	function logoutTap() {
		$("#logoutButton").on("click", function() {
			if (accountData.isFacebookLogin()) {
				facebookHandler.logout();
			}else {
				amplify.publish('Logout', accountData.getUsername());
			}
			accountData.resetUserData();
		});
	}	
		
	function listRowTap() {
		$("#selectList").on("click", "li", function() {
			var index = $(this).index();
			if (index == 0){ //play game
				
			}else if (index == 1) { //observe game
				
			}else if (index == 2) { //highscore
				$.mobile.changePage("#highscorePage", { transition: "slide", changeHash: true });
			}else if (index == 3) {
				$.mobile.changePage("#sponsorPage", { transition: "slide", changeHash: true });
			}
		});
	}
		
		
	//public module functions (API)
	return {
		pageInit : pageInit,
		pageBeforeShow : pageBeforeShow,
		pageShow : pageShow
	}
})();