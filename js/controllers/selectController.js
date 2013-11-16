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
			//remove current picture
			$("#userImg").remove()
			//add picture
			$("#userPoints").css("margin-top", "15px");
			var imgPath = "http://graph.facebook.com/"+1690871472 +"/picture";
			
			$('<img id="userImg" src="'+ imgPath +'">').load(function() {
			  $('#welcomeInfo').after($(this));
			});
		}else {
			//removes facebook image if itexists
			$("#userImg").remove();
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