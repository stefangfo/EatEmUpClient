var highscoreController = (function() {
	
	//page events
	function pageInit() {
		bindUIActions();
		bindServiceMessages();
	}
	
	function pageBeforeShow() {
		$.mobile.showPageLoadingMsg("a", "Highscores werden abgefragt");
		amplify.publish('HighscoreRequest', {username: accountData.getUsername(), 
											 topx: 5});
	}
	
	function pageShow() {
	}
	
	function bindUIActions() {
	}
	
	function bindServiceMessages() {
		amplify.subscribe('Highscore', function (message) {
			$.mobile.hidePageLoadingMsg();
			console.log("Highscores loaded!");
		});
	}
	
		
		
	//public module functions (API)
	return {
		pageInit : pageInit,
		pageBeforeShow : pageBeforeShow,
		pageShow : pageShow
	}
})();