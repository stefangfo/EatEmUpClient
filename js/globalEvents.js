//jQuery Mobile Page Events
//loginPage
$(document).on('pageinit', '#loginPage' ,function(){
   loginController.pageInit();
});

$(document).on('pageshow', '#loginPage' ,function(){
   loginController.pageShow();
});

//select page 
$(document).on('pageinit', '#selectPage' ,function(){
   selectController.pageInit();
});

$(document).on('pageshow', '#selectPage' ,function(){
   selectController.pageShow();
});

//lobby page
$(document).on('pageinit', '#lobbyPage' ,function(){
   lobbyController.pageInit();
});

$(document).on('pageshow', '#lobbyPage' ,function(){
   lobbyController.pageShow();
});

//game page
$(document).on('pageinit', '#gamePage' ,function(){
   gameController.pageInit();
});

$(document).on('pageshow', '#gamePage' ,function(){
   gameController.pageShow();
});

//gamespectator page
$(document).on('pageinit', '#gameSpectatorPage' ,function(){
   gameSpectatorController.pageInit();
});

$(document).on('pageshow', '#gameSpectatorPage' ,function(){
   gameSpectatorController.pageShow();
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