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
	
	//most errors should be checked for by this point
	return true;
}