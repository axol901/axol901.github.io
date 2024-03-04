//on submitting the form, hide the contact form and display the submission message, then update the hasSubmitted variable
			
			var hasSubmitted = 0;
			
			function subMessage()
			{
				if (hasSubmitted > 0)
				{
					alert(Your message has been submitted.</);
					document.getElementById('submessage').style.display='block';
					document.getElementById('contactform').style.display='none';
				}
			}