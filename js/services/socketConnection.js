var socketConnection = (function() {
	var connection = null;

	function establishConnection() {
		connection = new WebSocket('ws://localhost:8080/websocketTest');
		bindEvents();
		
		
	}
	
	//web socket events
	function bindEvents() {
	    connection.onopen = function(event) {
	      connection.send("hello");
	    }
	
	    connection.onmessage = function(event) {
	       console.log("message received "+event.data);
	      // var message = jQuery.parseJSON(event.data);
		   
	      
	       //console.log(message.message.teamRedWin);
	    }
	
		connection.onerror = function(event) {
	      
	    }
	    
	    connection.onclose = function(event) {
		    
	    }
	}

	    
    return{
	    establishConnection : establishConnection
    }
   
    
})();

