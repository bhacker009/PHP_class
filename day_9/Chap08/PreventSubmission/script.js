var email = document.getElementById("email");
email.onfocus = function(){
	email.placeholder = "xyz@gmail.com";
}
email.onblur = function(){
	email.placeholder = "";
}
var form = document.getElementById("frmContact");
form.onsubmit = function() {
	if(email.value == "") document.getElementById("errorMessage").innerHTML = "ERROR ";
	return false;
}