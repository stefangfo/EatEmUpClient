var socketConnection = (function() {
	var connection = null;

	function establishConnection() {
		connection = new WebSocket('ws://localhost:8080/websocket');
		bindSocketEvents();
		bindSendMessages();
	}
	
	//web socket events
	function bindSocketEvents() {
	    connection.onopen = function(event) {
	    	//connection.send('hello');
	    	console.log("Websocket Opened!");
	    }
	
	    connection.onmessage = function(event) {
	       console.log("message received "+event.data);
	       //amplify.publish(event.data.type, event.data.message);
	    }
	
		connection.onerror = function(event) {
	       console.log("Websocket Error!");
	    }
	    
	    connection.onclose = function(event) {
		   console.log("Websocket Closed!");
	    }
	}

	//messages from client to server
	function bindSendMessages() {
		amplify.subscribe('sendLoginData', function (loginInfo) {
			var message = {
					type:"Login",
					message: loginInfo
			}
			sendLoginRequest(message);
		});
		
		
		
	}
	
	function sendLoginRequest(message) {
		//send message
		console.log(JSON.stringify(message));
		connection.send(JSON.stringify(message));
		
	}
	
	    
    return{
	    establishConnection : establishConnection
    }
   
    
})();

