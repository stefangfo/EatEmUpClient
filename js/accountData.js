var accountData = (function() {
	var username = "";
	var points = 0;
	var code = "";
	
	
	//getter/setter
	function setPoints(inputPoints) {
		points = inputPoints;
	}
	
	function getPoints() {
		return points;
	}
	
	function setCode(inputCode) {
		code = inputCode;
	}
	
	function getCode() {
		return code;
	}
	
	function setUsername(inputUsername) {
		username = inputUsername;
	}
	
	function getUsername() {
		return username;
	}
	
	//public module functions (API)
	return {
		setUsername : setUsername,
		getUsername : getUsername,
		setPoints : setPoints,
		getPoints : getPoints,
		setCode : setCode,
		getCode : getCode
	}
})();