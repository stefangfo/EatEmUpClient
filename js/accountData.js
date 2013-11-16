var accountData = (function() {
	var fbAccount = false;
	var userID = "";
	var username = "";
	var points = 0;
	var code = "";
	
	
	//getter/setter
	function setIsFacebookLogin(loginType) {
		fbAccount = loginType;
	}
	
	function isFacebookLogin() {
		return fbAccount;
	}
	
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
	
	function setUserID(inputUserID) {
		userID = inputUserID;
	}
	
	function getUserID() {
		return userID;
	}
	
	function setUsername(inputUsername) {
		username = inputUsername;
	}
	
	function getUsername() {
		return username;
	}
	
	function resetUserData() {
		console.log("reset");
		fbAccount = false;
		userID = "";
		username = "";
		points = 0;
		code = "";
	}
	
	
	//public module functions (API)
	return {
		setIsFacebookLogin : setIsFacebookLogin,
		isFacebookLogin : isFacebookLogin,
		setUserID : setUserID,
		getUserID : getUserID,
		setUsername : setUsername,
		getUsername : getUsername,
		setPoints : setPoints,
		getPoints : getPoints,
		setCode : setCode,
		getCode : getCode,
		resetUserData : resetUserData
	}
})();