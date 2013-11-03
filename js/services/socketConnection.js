var socketConnection = (function() {
	var connection = null;

	function establishConnection() {
		connection = new WebSocket('ws://localhost:8080/websocketTest');
		bindSocketEvents();
		bindSendMessages();
	}
	
	//web socket events
	function bindSocketEvents() {
	    connection.onopen = function(event) {
	      connection.send("hello");
	    }
	
	    connection.onmessage = function(event) {
	       console.log("message received "+event.data);
	       //amplify.publish(event.data.type, event.data.message);
	    }
	
		connection.onerror = function(event) {
	      
	    }
	    
	    connection.onclose = function(event) {
		    
	    }
	}

	//messages from client to server
	function bindSendMessages() {
		amplify.subscribe('loginRequest', function (loginInfo) {
			sendLoginRequest(loginInfo);
		});
		
	}
	
	function sendLoginRequest(loginInfo) {
		//send message
		console.log(loginInfo.password);
	}
	
	    
    return{
	    establishConnection : establishConnection
    }
   
    
})();

