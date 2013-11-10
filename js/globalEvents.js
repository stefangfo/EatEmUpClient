//jQuery Mobile Page Events
//loginPage
$(document).on('pageinit', '#loginPage' ,function(){
   loginController.pageInit();
});

$(document).on('pagebeforeshow', '#loginPage' ,function(){
   loginController.pageBeforeShow();
});

$(document).on('pageshow', '#loginPage' ,function(){
   loginController.pageShow();
});

//select page 
$(document).on('pageinit', '#selectPage' ,function(){
   selectController.pageInit();
});

$(document).on('pagebeforeshow', '#selectPage' ,function(){
   selectController.pageBeforeShow();
});

$(document).on('pageshow', '#selectPage' ,function(){
   selectController.pageShow();
});

//lobby page
$(document).on('pageinit', '#lobbyPage' ,function(){
   lobbyController.pageInit();
});

$(document).on('pagebeforeshow', '#lobbyPage' ,function(){
   lobbyController.pageBeforeShow();
});

$(document).on('pageshow', '#lobbyPage' ,function(){
   lobbyController.pageShow();
});

//game page
$(document).on('pageinit', '#gamePage' ,function(){
   gameController.pageInit();
});

$(document).on('pagebeforeshow', '#gamePage' ,function(){
   gameController.pageBeforeShow();
});

$(document).on('pageshow', '#gamePage' ,function(){
   gameController.pageShow();
});

//gamespectator page
$(document).on('pageinit', '#gameSpectatorPage' ,function(){
   gameSpectatorController.pageInit();
});

$(document).on('pagebeforeshow', '#gameSpectatorPage' ,function(){
   gameSpectatorController.pageBeforeShow();
});

$(document).on('pageshow', '#gameSpectatorPage' ,function(){
   gameSpectatorController.pageShow();
});

//highscore page
$(document).on('pageinit', '#highscorePage' ,function(){
   highscoreController.pageInit();
});

$(document).on('pagebeforeshow', '#highscorePage' ,function(){
   highscoreController.pageBeforeShow();
});

$(document).on('pageshow', '#highscorePage' ,function(){
   highscoreController.pageShow();
});


//document ready events
$(document).ready(function(){
	socketConnection.establishConnection();
});


//browser window events
$(window).on('resize', function(){
	//resize map when window size changes
	if ($.mobile.activePage.attr('id') == "gamePage"){
		gameController.resizeMap(); 
	}else if($.mobile.activePage.attr('id') == "gameSpectatorPage"){
		gameSpectatorController.resizeMap();
	}
});