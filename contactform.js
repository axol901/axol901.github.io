//on clicking the reset button, display the reset message and real reset button
function resetMessage()
{
	document.getElementById('resetmessage').style.display='block';
	document.getElementById('submessage').style.display='none';
}
			
//hide the reset message and real reset button
function hideResetMessage()
{
	document.getElementById('resetmessage').style.display='none';
}
			
//on clicking the submit button, display the submission message and real submit button
function subMessage()
{
	document.getElementById('submessage').style.display='block';
	document.getElementById('resetmessage').style.display='none';
}
			
//hide the reset message and real reset button
function hideSubMessage()
{
	document.getElementById('submessage').style.display='none';
}

//Form Validation
function checkForm()
{
	//check for strings containing only white space
	if (document.getElementById('fname').value.replaceAll(" ", "").length == 0) {alert("First name must not be empty."); return false}
	if (document.getElementById('lname').value.replaceAll(" ", "").length == 0) {alert("Last name must not be empty."); return false}
	if (document.getElementById('email').value.replaceAll(" ", "").length == 0) {alert("Email must not be empty."); return false}
	if (document.getElementById('message').value.replaceAll(" ", "").length == 0) {alert("Message must not be empty."); return false}
	
	//check if names contain invalid characters
	var fnameLow = document.getElementById('fname').value.toLowerCase();										//create string containing only lowercase letters to simplify process
	for (const char of fnameLow)
	{
		console.log(char);
		if (char < "a" || char > "z" && char != "-") {alert("First name must only contain letters."); return false}
	}
	
	var lnameLow = document.getElementById('lname').value.toLowerCase();										//create string containing only lowercase letters to simplify process
	for (const char of lnameLow)
	{
		if (char < "a" || char > "z" && char != "-") {alert("Last name must only contain letters."); return false}
	}
	
	//check (very roughly) if email is valid
	//NOTE: This code may be redundant due to the required attribute.
	var email = document.getElementById('message').value.replaceAll(/\s/g, '');									//assign email to a variable and trim white space
	if (email.length < 5) {alert("Invalid Email."); return false}												//email must contain at least 5 characters
	
	if (!email.includes('@')) {alert("Invalid Email @."); return false}											//check for @
	if (email.indexOf('@') == 0) {alert("Invalid Email."); return false}										//@ cannot be the first character
	if(email.indexOf('@') > email.length - 3) {alert("Invalid Email."); return false}							//@ cannot be within the last 3 characters
	if(email.indexOf('@') != email.lastIndexOf('&#64;')) {alert("Invalid Email."); return false}				//@ must only be included once
	
	if(!email.includes('.')) {alert("Invalid Email."); return false}	 										//check for .
	if(email.indexOf('.') <= email.indexOf('@') + 1) {alert("Invalid Email."); return false}					//. must appear at least one character after @
	if(email.indexOf('.') >= email.length - 1) {alert("Invalid Email."); return false}		 					//. cannot be the last character
	
	//most errors should be checked for by this point
	return true;
}